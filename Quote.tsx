import React from "react";
import {Text, View} from "react-native";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RANDOM_QUOTE = gql`
    {
        randomQuote{
            text
        }
    }
`;

export default function Quote(){
    const { loading, error, data } = useQuery(RANDOM_QUOTE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <View>
            <Text>{data.randomQuote.text}</Text>
        </View>
    )
}