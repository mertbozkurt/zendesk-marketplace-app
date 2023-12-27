import React, { useCallback, useState } from "react";
import { ButtonDefault } from "../../components/shared/ButtonDefault";
import { Tabs } from "../../components/Tabs/Tabs";
import { Report } from "../../components/Report/Report";
import "./style.css";
import { Feedback } from "../../components/Feedbacks";
import zafClient from "@app/zendesk/sdk";

interface Props {
  ticket?: any;
}

let tags = [{
  id: "",
  name: "",
  font_color: "",
  background_color: ""
}]
let intelligentTags = [""]

let metadata: any;

async function fetchMetadata() {
  metadata = await zafClient.metadata();
}
await fetchMetadata();
const token = metadata.settings.token;
const message = metadata.settings.message;
const domain = metadata.settings.domain;

let feedbacks = [{
  id: "",
  creater_name: "",
  created_at: "",
  created_time: "",
  feedback: "",
  tags: tags,
  channel: "",
  intelligentTags: intelligentTags
}];
let allTags: object[] = [];
let allIntelligentTags: string[] = [];

export const EkranReportfull = ({
  ticket,
}: Props): JSX.Element => {

  const [result, setResults] = useState([{
    id: "",
    creater_name: "",
    created_at: "",
    created_time: "",
    feedback: "",
    tags: tags,
    channel: "",
    intelligentTags: intelligentTags
  }]);


  const metadata = useCallback(async () => {
    const metadata: any = await zafClient.metadata();


    const { ticket } = await zafClient.get("ticket");

    const options = {
      url: `${metadata.settings.domain}/v1/customers?search_string=` + ticket.requester.email + "&status=paying",
      type: "GET",
      cors: false,
      headers: {
        'authorization': "Token token=" + token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    };
    let creatorJson = { customers: [{ "id": 1 }] }
    await zafClient.request(options).then(async (response: any) => {

      creatorJson = await response
      if (creatorJson.customers.length === 1) {

        const options = {
          url: `${metadata.settings.domain}/v1/feedback_timeline?creators=` + creatorJson.customers[0].id,
          type: "GET",
          cors: false,
          headers: {
            'authorization': "Token token=" + token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        };
        await zafClient.request(options).then(async (response: any) => {

          const json = await response;

          feedbacks = json.feedback.map((item: any) => {

            const date = new Date(item.created_at);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const hours = date.getHours();
            const minutes = date.getMinutes();
            let result: string = "";

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}`;
            const languageCode = item.language.code

            const feedbacks = item.responses.map((res: any) => "<div class=\"question\">" + res.question.body[languageCode] + "</div><div class=\"answer\">" + res.response + "</div>").join('');

            const tempItem = {
              "id": item.id,
              "creater_name": item.creator.name,
              "created_at": formattedDate.toString(),
              "created_time": formattedTime.toString(),
              "feedback": feedbacks,
              "tags": [],
              "channel": item.node.type,
              "intelligentTags": []
            };

            return tempItem;

          }, []);
          await feedbacks.map(async item => {

            const options = {
              url: `${metadata.settings.domain}/v1/feedback/${item.id}`,
              type: "GET",
              cors: false,
              headers: {
                'authorization': "Token token=" + token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
              }
            };
            await zafClient.request(options).then(async (response: any) => {
              const json = await response;

              if (json.tags.length > 0) {
                item.tags = json.tags;
                json.tags.map((item: any) => {
                  allTags.push(item);
                })
              }

              if (json.intelligent_tags.length > 0) {
                json.intelligent_tags.map((tag: any) => {

                  if (tag.intelligent_tag !== null) {
                    item.intelligentTags.push(tag.intelligent_tag.name)
                    allIntelligentTags.push(tag.intelligent_tag.name)
                  }
                })
              }
            })
          }, []);
        });

        setResults(feedbacks)
      } else {
        setResults(feedbacks)
        feedbacks = []
      }
    });

    allTags = getUniqueListBy(allTags, 'id');
    allIntelligentTags = removeDuplicates(allIntelligentTags)

  }, [])

  function getUniqueListBy(arr: any, key: string): any {
    return [...new Map(arr.map((item: any) => [item[key], item])).values()]
  }
  function removeDuplicates(arr: string[]) {
    return arr.filter((item,
      index) => arr.indexOf(item) === index);
  }
  metadata()

  return (
    <div key="ekran-reportfull" className="ekran-reportfull">
      <Tabs token={token} message={message} domain={domain} />
      <Report lastFeedbackDate="17.07.2023" tags={allTags} intelligent_tags={allIntelligentTags} token={token} domain={domain} />
      <div className="frame-27">
        <div className="text-wrapper-14">Last Feedbacks</div>
      </div>

      {
        feedbacks.map(item => (

          <Feedback key={item.id} firstLetter={item.creater_name !== null ? item.creater_name[0] : "-"} name={item.creater_name} feedbackDate={item.created_at} feedbackTime={item.created_time} feedbackContent={item.feedback} tags={item.tags} channel={item.channel} intelligentTags={item.intelligentTags} />

        ))}
      <div className="frame-35">
        <div className="frame-36">
          <p className="text-wrapper-20">{feedbacks.length} Messages</p>
          <ButtonDefault
            className="button-default-5"
            divClassName="button-default-4"
            label="More Feedback"
            property1="subtle"
            radius="zero"
            showLeftIcon={false}
            showRightIcon={false}
            size="SM" showText={false} clickFunc={undefined} />
        </div>
      </div>
    </div>
  );
};
