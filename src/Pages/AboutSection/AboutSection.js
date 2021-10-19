import React from 'react';

const AboutSection = (props) => {
    const customStyle=`row align-items-center mb-5 ${props?.display}`;
    return (
        <div>
            <div className={customStyle}>
                {/* column  */}
                    <div className='col-md-6 col-xs-12 col-sm-12 text-start'>
                    {/* about title  */}
                    <h1 className='custom-color'>{props.children}</h1>
                    {/* about description  */}
                    <p>Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend.</p>
                    <p>Uneasy barton seeing remark happen hi has. Am possible offering contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do. Betrayed shutters in vicinity it unpacked in.</p>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        {/* about image */}
                    <img className='img-fluid' src={props.img} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default AboutSection;