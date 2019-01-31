import React from 'react';
import './main.css';

function Page(props: any) {
    let pageClassName = (props.idx % 2 != 0 ? 'page-primary' : 'page-secondary');
    return (
        <div className={pageClassName}>
            {props.children}
        </div>
    );
}

class Pages extends React.Component<any, any> {
    
    public childrenWithProps: any;
    
    constructor(props: any) {
        super(props);
        this.childrenWithProps = React.Children.map(this.props.children, (c, i) => {
            return React.cloneElement(c as React.ReactElement<any>, { idx: i + 1 })
        });
    }

    render() {
        return (
        <React.Fragment>
            <div className="carousel">
                {this.childrenWithProps}
            </div>
        </React.Fragment>
        );
    }
}

class Cards extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Pages>
                <Page>
                    <div id="logo-peter">peter</div>
                    <div id="logo-dulworth">dulworth</div>
                </Page>
                <Page>
                    <div id="education">education</div>
                    <div id="school">rice university c/o 2020</div>
                    <div id="degree-1">b.s. computer science</div>
                    <div id="degree-2">b.a. mathematics</div>
                </Page>
                {/* <Page> */}
                    {/* <div id="experience">experience</div> */}
                    {/* <div id="job">two sigma - robotics mentor</div> */}
                    {/* <div id="title">comp 310 - teaching assistant</div> */}
                    {/* <div id="date">rice CS - research assistant</div> */}
                {/* </Page> */}
                <Page>
                    <div id="skills">skills</div>
                    <div id="skill-list">
                        <div id="link">html</div>
                        <div id="link">css</div>
                        <div id="link">sass/scss</div>
                        <div id="link">python</div>
                        <div id="link">c</div>
                        <div id="link">c++</div>
                        <div id="link">java</div>
                        <div id="link">sql</div>
                        <div id="link">react.js</div>
                        <div id="link">node.js</div>
                        <div id="link">javascript</div>
                        <div id="link">typescript</div>
                        <div id="link">php</div>
                        <div id="link">pyspark</div>
                        <div id="link">hadoop</div>
                        <div id="link">tensorflow</div>
                        <div id="link">git</div>
                        <div id="link">svn</div>
                    </div>
                </Page>
                <Page>
                    <div id="resume"><a target="_blank" href="http://www.peterdulworth.com/resume">resume</a></div>
                    <div id="click"><a target="_blank" href="http://www.peterdulworth.com/resume">click</a></div>
                </Page>
                <Page>
                    <div id="contact">contact</div>
                    <div id="email">psd2@rice.edu</div>
                    <div id="phone">(832) 567-5653</div>
                    <div id="github"><a target="_blank" href="https://github.com/PeterDulworth">github</a></div>
                    <div id="linkedin"><a href="https://www.linkedin.com/in/peter-dulworth/">linkedin</a></div>
                </Page>
            </Pages>
        );
    }
}

export default Cards;