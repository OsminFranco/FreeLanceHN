import React from 'react';
import Page from '../../Page';
import VotingDeck from './VotingDeck';
import { NavLinkBtn } from '../../Button';
import './votes.css'

export default ()=>{
    return(
        <Page
            title="Mociones por Votar"
            showFooter={false}
            showFooter={false}
        >
            <VotingDeck title="Ingreso por medio de RFID"></VotingDeck>
            <VotingDeck title="Modernizacion de parque"></VotingDeck>
            <VotingDeck title="Ampliacion pagos de cuotas"></VotingDeck>

            <NavLinkBtn toLink="/" className="btnBack">Regresar</NavLinkBtn>

        </Page>
    );

}