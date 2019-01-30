import React from 'react';
import './main.css';

class Page extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let pageClassName = (this.props.idx % 2 != 0 ? 'page-primary' : 'page-secondary');
        return (
            <div className={pageClassName}>
                {this.props.children}
            </div>
        );
    }
}

class Cards extends React.Component<any, any> {
    render() {
        return (
        <React.Fragment>
            <div className="carousel">
                <Page idx="1">
                    <div id="logo-peter">peter</div>
                    <div id="logo-dulworth">dulworth</div>
                </Page>
                <Page idx="2">
                    <div id="education" className="heading">education</div>
                    <div id="school">rice university c/o 2020</div>
                    <div id="degree-1">b.s. computer science</div>
                    <div id="degree-2">b.a. mathematics</div>
                </Page>
                <Page idx="3">
                    <div id="experience" className="heading">experience</div>
                    <div id="job">two sigma</div>
                    <div id="title">robotics mentor</div>
                    <div id="date">jan 2019 - present</div>
                </Page>
                <Page idx="4">
                    <div id="resume" className="heading"><a className="no-style-link" target="_blank" href="http://www.peterdulworth.com/resume">resume</a></div>
                    <div id="click"><a className="no-style-link" target="_blank" href="http://www.peterdulworth.com/resume">click</a></div>
                </Page>
                <Page idx="5">
                    <div id="contact" className="heading">contact</div>
                    <div id="email">psd2@rice.edu</div>
                    <div id="phone">(832) 567-5653</div>
                    <div id="github"><a className="no-style-link" target="_blank" href="https://github.com/PeterDulworth">github</a></div>
                    <div id="linkedin"><a className="no-style-link" href="https://www.linkedin.com/in/peter-dulworth/">linkedin</a></div>
                </Page>
            </div>
        </React.Fragment>
        );
    }
}

export default Cards;