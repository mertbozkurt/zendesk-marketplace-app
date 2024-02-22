

import PropTypes, { object } from "prop-types";
import React, {  useState, useCallback } from "react";
import { IconSolidBlack } from "../shared/IconSolidBlack";
import { StateDefaultSizeWrapper } from "../shared/StateDefaultSizeWrapper";
import { StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn } from "../shared/StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn";
import zafClient from "@app/zendesk/sdk";

interface Props {
    lastFeedbackDate: string;
    tags: object[];
    intelligent_tags: string[];
    token: string;
    domain: string
}

export const Report = ({
    lastFeedbackDate, tags, intelligent_tags, token, domain
}: Props): JSX.Element => {


    const [result, setResults] = useState({
        totalFeedback: 0,
        csatScore: 0,
        npsScore: 0,
    });
    const [requester, setRequester] = React.useState<{ email: string, name: string, id: number }>({ email: "", name: "", id: 0 })
    const [customerID, setCustomerID] = React.useState("");


    React.useLayoutEffect(() => {

        async function getRequester() {
            const { ticket } = await zafClient.get("ticket");


            const options = {
                url: `${domain}/v1/customers?search_string=` + ticket.requester.email + "&status=paying",
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
                if (json.customers.length === 1) {
                    setCustomerID(json.customers[0].id)
                }

            })

        }
        getRequester();
        async function fetchReport() {

            if (customerID !== "") {
                
                
                const options = {
                    url: `${domain}/v1/feedback/customer_metrics?creators=` + customerID,
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
                    if (json.all[0].data > 0) {
                        setResults({
                            totalFeedback: json.all[0].data,
                            npsScore: json.score[0].data === null ? 0 : json.score[0].data.toFixed(2),
                            csatScore: json.custom_score[0].data === null ? 0 : json.custom_score[0].data.toFixed(2),
                        });
                    }
    
                })
            }
        }

        fetchReport();
    }, [customerID]);

    const handleRequester = useCallback(async () => {

        const { ticket } = await zafClient.get("ticket");
        const response = await fetch(`${domain}/v1/customers?search_string=` + ticket.requester.email + "&status=paying", {
            headers: {
                'authorization': `Token token=${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        });
        const json = await response.json();
        if (json.customers.length === 1) {
            setCustomerID(json.customers[0].id)
        }
        setRequester(ticket.requester);
    }, [requester])

    return (
        <>
            <div className="frame-4">
                <div className="text-wrapper-2">Report</div>
                <p className="last-feedback">
                    <span className="span"> </span>
                    <span className="text-wrapper-3"></span>
                </p>
            </div>
            <div className="frame-5">
                <div className="frame-12">
                    <div className="frame-13">
                        <div className="text-wrapper-6">Total Feedback</div>
                    </div>
                    <div className="frame-14">
                        <div className="frame-15">
                            <div className="frame-10">
                                {/* <div className="badges-NEW-wrapper">
                                    <StateDefaultSize
                                        className="badges-NEW"
                                        divWrapperIcon={
                                            <IconSolidBlack
                                                className="design-component-instance-node-2"
                                                icon20SolidBlackTrendup10Color="#06C494"
                                                icon20SolidBlackTrendup10StyleOverrideClassName="icon-solid-black-2"
                                            />
                                        }
                                    />
                                </div> */}
                                <div className="text-wrapper-5">{result.totalFeedback}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-6">
                    <div className="frame-7">
                        <div className="frame-11">
                            <div className="text-wrapper-4">NPS</div>
                        </div>
                        <div className="frame-9">
                            <div className="frame-10">
                                {/* <div className="badges-NEW-wrapper">
                                    <StateDefaultSize
                                        className="badges-NEW"
                                        divWrapperIcon={
                                            <IconSolidBlack
                                                className="design-component-instance-node-2"
                                                icon20SolidBlackTrendup10Color="#06C494"
                                                icon20SolidBlackTrendup10StyleOverrideClassName="icon-solid-black-2"
                                            />
                                        }
                                    />
                                </div> */}
                                <div className="text-wrapper-5">{result.npsScore}</div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-7">
                        <div className="frame-8">
                            <div className="text-wrapper-4">Weighted Score</div>
                        </div>
                        <div className="frame-9">
                            <div className="frame-10">
                                {/* <div className="badges-NEW-wrapper">
                                    <StateDefaultSize
                                        className="badges-NEW"
                                        divWrapperIcon={
                                            <IconSolidBlack
                                                className="design-component-instance-node-2"
                                                icon20SolidBlackTrendup10Color="#06C494"
                                                icon20SolidBlackTrendup10StyleOverrideClassName="icon-solid-black-2"
                                            />
                                        }
                                    />
                                </div> */}
                                <div className="text-wrapper-5">{result.csatScore}</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="frame-16">
                    <div className="frame-17">
                        <div className="text-wrapper-7">Lorem Ipsum</div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">

                                </div>
                            </div>

                        </div>
                    </div>
                    <Tooltip
                        addColor="off"
                        button="off"
                        className="tooltip-instance"
                        frameSmallOffDivClassName="tooltip-2"
                        frameSmallOffText="87%"
                        point="down-center_1"
                        rectangle="/img/rectangle-294-22.svg"
                        size="small"
                    />
                </div> */}
                <div className="frame-18">
                    <div className="frame-19">
                        <div className="text-wrapper-6">Tags</div>
                    </div>
                    <div className="frame-20">
                        <div className="frame-21">
                            <div className="frame-22">
                                {tags.map((item: any) => (
                                    <div>
                                        <div className="frame-23"><StateDefaultSizeWrapper className="design-component-instance-node-2" text={item.name} /></div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <div className="frame-24">
                    <div className="frame-19">
                        <div className="text-wrapper-6">Intelligent Tags</div>
                    </div>
                    <div className="frame-25">

                        <div className="frame-26">
                            <div className="frame-23">
                                {intelligent_tags.map((item: any) => (
                                    <StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn
                                        className="design-component-instance-node-2"
                                        divWrapperIcon={
                                            <IconSolidBlack
                                                className="design-component-instance-node-2"
                                                icon20SolidBlackTrendup10Color="#FFB702"
                                                icon20SolidBlackTrendup10StyleOverrideClassName="icon-solid-black-2"
                                            />
                                        }
                                        text={item}
                                    />
                                ))
                                }

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

Report.propTypes = {
    lastFeedbackDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(object),
    intelligent_tags: PropTypes.array,
    token: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired
};
