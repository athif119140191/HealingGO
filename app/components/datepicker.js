import React, { useEffect, useState } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';

const CustomDatePicker = (props) => {
    const { defaultDate } = props;
    const [date, setDate] = useState(moment(defaultDate));
    const [show, setShow] = useState(false);

    const onAndroidChange = (e, selectedDate) => {
        // Hide first because it will show datepicker again
        setShow(false);
        if (selectedDate) {
            setDate(moment(selectedDate));
            props.onDateChange(selectedDate);
        }
    }

    const onChange = (e, selectedDate) => {
        setDate(moment(selectedDate));
    }

    const onPressCancel = () => {
        // Reset back to default date
        setDate(moment(defaultDate));
        // Hide modal
        setShow(false);
    }

    const onPressDone = () => {
        // Send the date back to the parent component
        props.onDateChange(date);
        // Hide modal
        setShow(false);
    }

    const renderDatePicker = () => {
        return (
            <DateTimePicker
                timeZoneOffsetInMinutes={0}
                value={new Date(date)}
                mode='date'
                minimumDate={new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))}
                maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
            />
        );
    }

    return (
        <TouchableHighlight
            activeOpacity={0}
            onPress={() => setShow(true)}>
            <View>
                {/* Current date selected */}
                <Text style={props.textStyle}>{date.format('YYYY-MM-DD')}</Text>

                {Platform.OS !== 'ios' && show && (
                    <View>
                        {renderDatePicker()}
                    </View>
                )}

                {/* Datepicker */}
                {Platform.OS === 'ios' && (
                    <Modal
                        transparent={true}
                        animationType='slide'
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => setShow(false)}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                style={styles.datePickerMask}
                                activeOpacity={1}
                                visible={show}
                                onPress={() => setShow(false)}>
                                <TouchableHighlight 
                                    underlayColor={'#FFFFFF'} 
                                    style={{ flex: 1, borderTopColor: '#E9E9E9', borderTopWidth: 1 }} 
                                    onPress={() => console.log('clicked datepicker')}>
                                    <View style={styles.datePickerCon}>
                                        <View style={{ marginTop: 20 }}>
                                            {/* Community Datepicker */}
                                            {renderDatePicker()}
                                        </View>
                                        {/* Cancel button */}
                                        <TouchableHighlight
                                            underlayColor={'transparentl'}
                                            onPress={onPressCancel}
                                            style={[ styles.btnText, styles.btnCancel ]}>
                                            <Text style={[ styles.btnTextText, styles.btnTextCancel ]}>
                                                Cancel
                                            </Text>
                                        </TouchableHighlight>
                                        {/* Done button */}
                                        <TouchableHighlight
                                            underlayColor={'transparent'}
                                            onPress={onPressDone}
                                            style={[styles.btnText, styles.btnConfirm]}>
                                            <Text style={[styles.btnTextText]}>
                                                Done
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </TouchableHighlight>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                )}
            </View>
        </TouchableHighlight>
    )
}

CustomDatePicker.defaultProps = {
    defaultDate: moment(),
    textStyle: {},
    onDateChange: () => {},
};

const styles = StyleSheet.create({
    datePickerMask: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    datePickerCon: {
        backgroundColor: '#FFFFFF',
        height: 260,
        overflow: 'hidden',
    },
    btnText: {
        position: 'absolute',
        top: 0,
        height: 42, 
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextText: {
        fontSize: 16,
        color: '#46cf98',
    },
    btnTextCancel: {
        color: '#666666'
    },
    btnCancel: {
        left: 0
    },
    btnConfirm: {
        right: 0
    },
    disabled: {
        backgroundColor: '#eee'
    }
});

export default CustomDatePicker;