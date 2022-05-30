import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    Dimensions,
    Modal, TouchableWithoutFeedback,
    Button,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const { width, height } = Dimensions.get('window');

export default function ListBandara({ navigate, route }) {
    const { nama1, nama2, tglHome } = route.params;
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        var data = [
            {
                kode1: 'RIT',
                kode2: 'SRJ',
                namaAsal: 'Raden Intan',
                namaTujuan: 'Sriwijaya',
                tgl: '2022-3-9',
                id: 1
            },
            {
                kode1: 'RIT',
                kode2: 'SKH',
                namaAsal: 'Raden Intan',
                namaTujuan: 'Soekarno Hatta',
                tgl: '2022-3-9',
                id: 2
            },
            {
                kode1: 'SKH',
                kode2: 'SRJ',
                namaAsal: 'Soekarno Hatta',
                namaTujuan: 'Sriwijaya',
                tgl: '2022-3-9',
                id: 3
            },
            {
                kode1: 'SKH',
                kode2: 'RIT',
                namaAsal: 'Soekarno Hatta',
                namaTujuan: 'Raden Intan',
                tgl: '2022-3-9',
                id: 4
            },
            {
                kode1: 'SRJ',
                kode2: 'RIT',
                namaAsal: 'Sriwijaya',
                namaTujuan: 'Raden Intan',
                tgl: '2022-3-9',
                id: 5
            },
            {
                kode1: 'SRJ',
                kode2: 'SKH',
                namaAsal: 'Sriwijaya',
                namaTujuan: 'Soekarno Hatta',
                tgl: '2022-3-9',
                id: 6
            },
        ];

        var nam1 = nama1.toLowerCase();
        var nam2 = nama2.toLowerCase();
        data = data.filter(l => l.namaAsal.toLowerCase().match(nam1) &&
            l.namaTujuan.toLowerCase().match(nam2) &&
            l.tgl.match(tglHome));

        setDataSource(data);


    }, []);
    console.log(JSON.stringify({
        data: dataSource,
    }));

    const separator = () => {
        return (
            <View style={{ height: 10, width: '100%', }} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={dataSource}
                ItemSeparatorComponent={() => separator()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.bookContainer}>
                            <Card
                                kode1={item.kode1}
                                kode2={item.kode2}
                                namaAsal={item.namaAsal}
                                namaTujuan={item.namaTujuan}
                                tgl={item.tgl}
                            />
                        </View>
                    );
                }}
            />
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', }}>
                <Text style={{ fontSize: 16 }}>
                    By Athif Najmudin (11914091)
                </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    bookContainer: {
        flexDirection: 'column',
    },
    dataContainer: {
        padding: 10,
        width: width - 50,
    },
});