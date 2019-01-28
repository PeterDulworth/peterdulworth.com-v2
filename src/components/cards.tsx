import React from 'react';
import './cards.css';

class Card extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let pageClassName = 'page ' + (this.props.idx % 2 == 0 ? 'page-primary' : 'page-secondary');
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
                <div className="landing-page">
                    <div className="name name-1">peter</div>
                    <div className="name name-2">dulworth</div>
                </div>
                <Card idx="2">
                    <div id="education" className="name">education</div>
                    <div className="school">rice university c/o 2020</div>
                    <div className="degree-1">b.s. computer science</div>
                    <div className="degree-2">b.a. mathematics</div>
                </Card>
                <Card idx="3">
                    <div id="experience" className="name">experience</div>
                    <div className="job">two sigma</div>
                    <div className="title">robotics mentor</div>
                    <div className="date">jan 2019 - present</div>
                </Card>
                <Card idx="4">
                    <div id="resume" className="name"><a className="no-style-link" target="_blank" href="http://www.peterdulworth.com/resume">resume</a></div>
                    <div className="click"><a className="no-style-link" target="_blank" href="http://www.peterdulworth.com/resume">click</a></div>
                </Card>
                <Card idx="5">
                    <div id="contact" className="name">contact</div>
                    <div className="email">psd2@rice.edu</div>
                    <div className="phone">(832) 567-5653</div>
                    <div className="github"><a className="no-style-link" target="_blank" href="https://github.com/PeterDulworth">github</a></div>
                    <div className="linkedin"><a className="no-style-link" href="https://www.linkedin.com/in/peter-dulworth/">linkedin</a></div>
                </Card>
            </div>
        </React.Fragment>
        );
    }
}

export default Cards;