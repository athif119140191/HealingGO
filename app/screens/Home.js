import React, { useState } from 'react';
import {
    StyleSheet, Text, TextInput,
    Modal, View, Pressable, TouchableHighlight
} from 'react-native';
import CustomDatePicker from '../components/datepicker';
import { Picker } from '@react-native-picker/picker';

import moment from 'moment';

const Home = (props) => {
    const [asal, setAsal] = useState('');
    const [tujuan, setTujuan] = useState('');
    const [date, setDate] = useState(moment('2022-03-09'));

    const saveData = () => {
        let tempDate = new Date(date);
        let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        console.log(JSON.stringify({
            asal: asal,
            tujuan: tujuan,
            date: fDate,
        }));
        props.navigation.navigate('ListBandara', {
            nama1: asal,
            nama2: tujuan,
            tglHome: fDate,
          });
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>HealingGO</Text>
            </View>
            <View style={{ ...styles.inputWrapper }}>
                <Text>Bandara Asal</Text>
                <View style={styles.container}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={asal}
                        onValueChange={(val) => setAsal(val)}
                    >
                        <Picker.Item label="- - Pilih Asal - -" value="" />
                        <Picker.Item label="Sriwijaya" value="Sriwijaya" />
                        <Picker.Item label="Raden Intan" value="Raden Intan" />
                        <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                    </Picker>
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <Text>Bandara Tujuan</Text>
                <View style={styles.container}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={tujuan}
                        onValueChange={(val) => setTujuan(val)}
                    >
                        <Picker.Item label="- - Pilih Tujuan - -" value="" />
                        <Picker.Item label="Sriwijaya" value="Sriwijaya" />
                        <Picker.Item label="Raden Intan" value="Raden Intan" />
                        <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                    </Picker>
                </View>
            </View>

            <View style={styles.inputWrapper}>
                <Text>Tanggal</Text>
                <View style={styles.container}>
                    <CustomDatePicker
                        textStyle={styles.textInput}
                        defaultDate={date}
                        onDateChange={(val) => setDate(val)}
                    />
                </View>
            </View>

            <View style={styles.inputWrapper}>
                <Pressable
                    style={styles.saveDetailsButton}
                    onPress={saveData}>
                    <Text style={styles.saveDetailsText}>
                        SUBMIT
                    </Text>
                </Pressable>
            </View>

            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', }}>
                <Text style={{ fontSize: 16 }}>
                    By Athif Najmudin (11914091)
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    container: {
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        paddingTop: 2,
    },
    textInput: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    saveDetailsButton: {
        backgroundColor: 'green',
        padding: 20,
        alignItems: 'center',
    },
    saveDetailsText: {
        color: 'white',
        fontWeight: '700',
    },
});

export default Home;