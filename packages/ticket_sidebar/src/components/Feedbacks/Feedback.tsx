

import PropTypes, { string } from "prop-types";
import 'react-toastify/dist/ReactToastify.css';
import { IconChannelCati } from "../../icons/IconChannelCati";
import { StateDefaultSizeWrapper } from "../shared/StateDefaultSizeWrapper";
import { IconChannelMail } from "../../icons/IconChannelMail";
import { IconChannelLink } from "../../icons/IconChannelLink";
import { IconChannelSms } from "../../icons/IconChannelSms";
import { StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn } from "../shared/StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn";
import { IconSolidBlack } from "../shared/IconSolidBlack";

interface Props {
    firstLetter: string,
    name: string,
    feedbackDate: string,
    feedbackTime: string,
    feedbackContent: string,
    channel: string,
    tags: { name: string, id: string, font_color: string, background_color: string }[]
    intelligentTags: string[]
}

export const Feedback = ({ firstLetter, name, feedbackDate, feedbackTime, feedbackContent, tags, channel, intelligentTags

}: Props): JSX.Element => {
    return (

        <div className="frame-wrapper">
            <div className="frame-28">
                <div className="group-2">
                       
                    <div className="frame-29">
                        <div className="profile">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-15">{firstLetter}</div>
                            </div>
                        </div>
                        <div className="text-wrapper-16">{name}</div>
                    </div>
                  
                    <div className="frame-30">
                        <p className="july-PM">
                            <span className="text-wrapper-17">{feedbackDate}</span>
                            <span className="text-wrapper-18">&nbsp;</span>
                            <span className="text-wrapper-19">{feedbackTime}</span>
                        </p>
                        <div className="frame-31">
                            {channel === "Mail" ?
                                <IconChannelMail className="icon-instance-node-2" /> :
                                (channel === "Link") ?
                                    <IconChannelLink className="icon-instance-node-2" /> :
                                    (channel === "Sms") ?
                                        <IconChannelSms className="icon-instance-node-2" /> :
                                        (channel === "Cati") ?
                                            <IconChannelCati className="icon-instance-node-2" /> :
                                            <IconChannelCati className="icon-instance-node-2" />
                            }

                        </div>
                    </div>
                   
                </div>
                <div className="frame-32">
                    <div className="frame-6">
                        <div className="feedback" dangerouslySetInnerHTML={{ __html: feedbackContent }} />

                    </div>
                </div>
                <div className="frame-33">
                    <div className="frame-21">
                        <div className="frame-22">
                            <>
                                {tags.length !== 0 ?
                                    tags.map(item => (
                                        <div className="frame-23">
                                            <StateDefaultSizeWrapper className="design-component-instance-node-2" text={item.name} />
                                        </div>)) : <></>
                                }
                            </>
                        </div>
                        <div className="frame-22">
                            <>
                                {intelligentTags.length !== 0 ?
                                    intelligentTags.map(item => (
                                        <div className="frame-23">
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
                                        </div>)) : <></>
                                }
                            </>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

Feedback.propTypes = {
    firstLetter: PropTypes.string,
    name: PropTypes.string.isRequired,
    feedbackDate: PropTypes.string.isRequired,
    feedbackTime: PropTypes.string.isRequired,
    feedbackContent: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object),
    channel: PropTypes.string.isRequired,
    intelligentTags: PropTypes.array

};
