

import PropTypes, { string } from "prop-types";
import React, { useState, useCallback, useEffect } from "react";
import { ButtonDefault } from "../shared/ButtonDefault";
import { IconRegularWrapper } from "../shared/IconRegularWrapper";
import { IconRegular } from "../shared/IconRegular";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import zafClient from "@app/zendesk/sdk";
import { Icon20RegularBlackBell } from "../shared/Icon20RegularBlackBell";


interface Props {
    showRightIcon?: boolean;
    label?: string;
    showLeftIcon?: boolean;
    showText?: boolean;
    property1?: "default" | "filled" | "outline" | "subtle" | "disabled";
    radius?: "sixteen" | "zero" | "two" | "thirty-two" | "four" | "eight";
    size?: "MD" | "SM" | "LG" | "XL" | "XS";
    className?: any;
    icon20RegularBlackCheckIcon?: JSX.Element;
    token: string;
    message: string;
    domain: string
}

let SURVEYS = [{
    label: "Name1",
    value: "value1",
    channelType: "sms"
}, {
    label: "Name2",
    value: "value2",
    channelType: "sms"
}, {
    label: "Name3",
    value: "value3",
    channelType: "sms"
}];


export const Tabs = ({ token, message,domain

}: Props): JSX.Element => {
    const [tabIndex, setTabIndex] = useState(5);
    const [selectedOption, setSelectedOption] = useState();
    const [selectedLinkOption, setSelectedLinkOption] = useState({ channelType: string, label: string, value: string });
    const [isOptionSelected, setOptionSelected] = useState(false);
    const [isLinkOptionSelected, setLinkOptionSelected] = useState(false);
    const [sendSurveyloader ,setSendSurveyloader] = useState(false);
    const [addSurveyloader ,setaddSurveyloader] = useState(false);



    const [requester, setRequester] = React.useState<{ email: string, name: string, id: number }>({ email: "", name: "", id: 0 })



    React.useEffect(() => {

        async function setTicketRequester() {
            const { ticket } = await zafClient.get("ticket");
            setRequester(ticket.requester);
        };
        setTicketRequester();

    }, []);




    const handleTabClick = useCallback(async (newTabIndex: any) => {

        if(newTabIndex ===0){
            setSendSurveyloader(true)
        }else{
            setaddSurveyloader(true)
        }
      
        const options = {
            url: `${domain}/v1/complete_login?token={{setting.apiToken}}`,
            type: "POST",
            cors: false,
            headers: {
              'authorization': "Token token=" + token
            },
            secure: true
          };
          await zafClient.request(options).then(async (adminUserResponse: any) => {

            const adminUserJson = await adminUserResponse;
            const options = {
                url: newTabIndex === 0 ? `${domain}/v1/email_campaigns?node_id=` + adminUserJson.node.id : `${domain}/v1/nodes/` + adminUserJson.node.id + "/children?type=Link",
                type: "GET",
                cors: false,
                headers: {
                  'authorization': "Token token={{setting.apiToken}}"
                },
                secure: true
              };
              await zafClient.request(options).then(async (response: any) => {
                const json = await response;
                if (newTabIndex === 0) {
                
                    SURVEYS = json.data.map((item: any) => {
                        return {
                            "channelType": "email",
                            "label": item.node.name,
                            "value": item.id
                        };
                    });
                } else {
                   
                    SURVEYS = json.map((item: any) => {
                        return {
                            "channelType": "link",
                            "label": item.name,
                            "value": item.id
                        };
                    });

                }
                setTabIndex(newTabIndex);
        
                SURVEYS.sort((a, b) => {
                    if (a.label < b.label) {
                        return -1;
                    }
                    if (a.label > b.label) {
                        return 1;
                    }
                    return 0;
                });
                
              })
              setSendSurveyloader(false);
              setaddSurveyloader(false)
          })   
    }, [requester, token]);

    const handleOptionClick = useCallback(async (selectedOption: any) => {
        setOptionSelected(true);
        setSelectedOption(selectedOption);

    }, [selectedOption])

    const handleLinkOptionClick = useCallback(async (selectedLinkOption: any) => {
        setLinkOptionSelected(true);
        setSelectedLinkOption(selectedLinkOption);
    }, [selectedLinkOption])

    const handleSendClick = useCallback(async (send: any) => {
       
    
        const options = {
            url: `${domain}/v1/email_campaigns/`+ send.value + "/email_sharings",
            type: "POST",
            cors: false,
            headers: {
                'authorization': "Token token={{setting.apiToken}}",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'content-type':'application/json'
            },
            accepts: "application/json",
            data: JSON.stringify({
                emails: [requester.email],
                custom_attributes: {
                    name: requester.name,
                    zendeskID: requester.id.toString()
                },
                transactional_data: {}
            }),
            secure: true
            };
        await zafClient.request(options).then((response) => {
            console.log(response);
          });


        setTabIndex(3);
        toast.info("Survey has been sent to " + requester.email, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }, [requester, token])


    const handleAddClick = useCallback(async (add: any) => {
        const ticketData = await zafClient.get('ticket.id')
        const ticketId = ticketData["ticket.id"];
        const response = (ticketId: string, email: string): string => {
            const resultArray = [{ question: "ticket_id", answer: ticketId }, { question: "email", answer: email }]
            const resultString = JSON.stringify(resultArray)
            return window.btoa(resultString)

        }
        const data = {
            ticket: {
                comment: {
                    html_body: "<p>" + message + ` <a href=\"${domain.replace("api.", "web.")}/web_feedback?node_id=` + selectedLinkOption.value + "&responses=" + response(ticketId, requester.email) + "\">Link</a></p>",
                    public: true
                }
            }
        }

        const settings = {
            url: `/api/v2/tickets/${ticketId}`,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(data)
        };

        zafClient.request(settings);
        setTabIndex(3);
        toast.info("Survey has been added to chat box", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }, [requester, selectedLinkOption])

    return (
        <>
            <div> <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /></div>
            <div className="frame-3">
                <ButtonDefault
                    className="button-default-instance"
                    divClassName="design-component-instance-node"
                    label="Send Survey"
                    override={<Icon20RegularBlackBell
                        className="icon-20-regular-black-bell" icon={undefined}  />}
                    property1={tabIndex === 0 ? "filled" : "outline"}
                    radius="four"
                    showRightIcon={false}
                    size="SM"
                    clickFunc={() => handleTabClick(0)} showLeftIcon={true} showText={true} showLoader={sendSurveyloader} />

                <ButtonDefault
                    className="button-default-instance"
                    divClassName="button-default-2"
                    label="Add Survey"
                    override={<IconRegularWrapper
                        className="design-component-instance-node-2" icon={undefined} />}
                    property1={tabIndex === 1 ? "filled" : "outline"}
                    radius="four"
                    showRightIcon={false}
                    size="SM"
                    clickFunc={() => handleTabClick(1)} showLeftIcon={true} showText={true} showLoader={addSurveyloader} />
            </div>
            <div className="frame-3-1">
                {tabIndex === 1 ? (
                    <div className=".master-dropdown .placeholder">
                        <Select
                            options={SURVEYS}
                            placeholder="Select Survey"
                            onChange={handleLinkOptionClick}
                            isSearchable={true}
                        />
                    </div>
                ) : null}
            </div>
            <div className="frame-3-1">
                {tabIndex === 0 ? (
                    <div className=".master-dropdown .placeholder">
                        <Select
                            options={SURVEYS}
                            placeholder="Select Survey"
                            onChange={handleOptionClick}
                            isSearchable={true}
                        />
                    </div>
                ) : null}
            </div>
            <br></br>
            <div className="frame-3-1">
                {tabIndex === 0 ? (
                    <ButtonDefault
                        className="button-default-instance"
                        divClassName="design-component-instance-node"
                        label="Send"
                        override={<></>}
                        property1={isOptionSelected ? "filled" : "disabled"}
                        radius="four"
                        showRightIcon={false}
                        size="LG"
                        clickFunc={() => handleSendClick(selectedOption)} showLeftIcon={true} showText={true} showLoader={false} />
                ) : null}
            </div>
            <div className="frame-3-1">
                {tabIndex === 1 ? (
                    <ButtonDefault
                        className="button-default-instance"
                        divClassName="design-component-instance-node"
                        label="Add"
                        override={<></>}
                        property1={isLinkOptionSelected ? "filled" : "disabled"}
                        radius="four"
                        showRightIcon={false}
                        size="LG"
                        clickFunc={() => handleAddClick(selectedLinkOption)} showLeftIcon={true} showText={true} showLoader={false}
                    />
                ) : null}
            </div>
            <br></br>

        </>
    );
};

Tabs.propTypes = {
    token: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};
