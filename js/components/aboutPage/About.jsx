import React from "react";
import ReactDOM from 'react-dom';
import {ROUTING} from '../../Routes';
import styles from './about.scss';

export default class About extends React.Component {
    constructor(props) {
		super(props);
	}

    createClass() {
        if (this.props.page===ROUTING.ABOUT.id) {
            this.activeClass = styles.active;
        } else {
            this.activeClass = "";
        }
    }

    render() {
        this.createClass();
        
        return (
            <div className={this.activeClass+" "+styles.about}>
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
                        <p>Sztányi Antal ügyvezető igazgató</p>
                    </div>
                </div>
            </div>
        )
    }
}