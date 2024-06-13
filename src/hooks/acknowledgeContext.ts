import React from 'react';

export const AcknowledgeContext = React.createContext({
    showDialog: false,
    setShowDialog: (showDialog: boolean) => {
        showDialog = !showDialog;
    },
    showAcknowledgeConfirmation: false,
    setShowAcknowledgeConfirmation: (showAcknowledgeConfirmation: boolean) => {
        showAcknowledgeConfirmation = !showAcknowledgeConfirmation;
    },
    responsible: '',
    setResponsible: (responsible: string) => {
        console.log('responsible', responsible);
    },
    action: '',
    setAction: (action: string) => {
        console.log('action', action);
    },
});