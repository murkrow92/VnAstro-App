/**
 * Created by murkrow on 7/18/17.
 */

import { API } from '../../libs/API';

export const FETCH_TRANSACTION = 'fetch_transaction';
import { AsyncStorage } from 'react-native';

const api = new API();

const fetchTransaction = transaction => ({
    type: FETCH_TRANSACTION,
    transaction,
});

export const fetchTransactionAsync = userId => (dispatch, getState) =>
    api.fetchTransaction(userId).then(
        response => {
            const transactionString = JSON.stringify(response);
            AsyncStorage.setItem('transaction', transactionString);
            dispatch(fetchTransaction(response));
        },
        error => {
            AsyncStorage.getItem('transaction').then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchTransaction(JSON.parse(value)));
                },
                error => {
                    alert('error: ' + error.message);
                },
            );
        },
    );
