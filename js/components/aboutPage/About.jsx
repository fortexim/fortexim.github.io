import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Settings';
import {TweenMax, TimelineLite} from 'gsap';
import {Localization} from '../../localization/Localization';
import styles from './about.scss';

export default class About extends React.Component {
    constructor(props) {
		super(props);
        this.tl = new TimelineLite();
        this.loc = Localization.getInstance().getDict();
	}

    componentWillUpdate(){
        this.loc = Localization.getInstance().getDict();
    }

    componentDidMount(){
        this.aboutNode = ReactDOM.findDOMNode(this.refs.about);
        this.createClass();
    }
    componentDidUpdate() {
        this.createClass();
    }
    createClass() {
        this.tl.clear();
        if (this.props.page===ROUTING.ABOUT.id) {
            this.tl.set(this.aboutNode, {display:"block"})
                .to(this.aboutNode,0.5, {opacity:1});
        } else {
            this.tl.to(this.aboutNode,0.5, {opacity:0})
              .set(this.aboutNode, {display:"none"});
        }
    }

    render() {
        return (
            <div ref="about" className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <p>Cégünk, a FORTEXIM Kft. egy családi vállalkozásból alakult külkereskedelmi vállalat.</p>
                        <p>Vállalkozásunkat 1995-ben édességek és cereáliák
                        előállítása és kereskedelme céljából alapítottuk,
                        s később úgy döntöttünk, hogy nemzetközi
                        kapcsolatainkat kihasználva és arra alapozva bővítjük
                        profilunkat, így 2012-ben megalapítottuk a FORTEXIM
                        Kft-t.</p>
                        <p>Cégünk főként Magyarországon, Romániában és
                        Szlovákiában végez értékesítést. Központi irodánk és
                        telephelyünk Magyarországon található.</p>
                        <p>Vállalatunk stabil banki kapcsolatokkal rendelkezik
                        és a nehéz gazdasági környezet ellenére nyereséges
                        évre számítunk. Vevőink stabil kiszolgálása céljából
                        jelentős szállítói kapacitást illetve raktárbázist
                        építettünk ki, és a jövőben további bővítést tervezünk.</p>
                        <p>Üdvözlettel:</p>
                        <p>{this.loc.ABOUT.P6}</p>
                    </div>
                </div>
            </div>
        )
    }
}