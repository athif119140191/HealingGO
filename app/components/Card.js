import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Card extends React.Component {
    render() {
        return (
            <View style={{
                flex:1
            }}>
            <TouchableOpacity
                style={{
                    paddingHorizontal: 32,
                    alignSelf: "center",
                    backgroundColor: "#FFF",
                    height: 182,
                    elevation: 1,
                    width: 400,
                    borderRadius: 16,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        paddingTop: 20,
                    }}
                >
                    <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontFamily: "RobotoBold",
                            color: "#4b3ca7",
                            fontSize: 20,
                        }}
                    >
                        {this.props.kode1}
                    </Text>
                    </View>
                    
                    <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#a2a2db",
                            paddingHorizontal: 14,
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        - - - - - - - -
                    </Text>
                    </View>
                    <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontFamily: "RobotoBold",
                            color: "#4b3ca7",
                            fontSize: 20,
                            textAlign: "right",
                        }}
                    >
                        {this.props.kode2}
                    </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: -5,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "RobotoRegular",
                            color: "#a2a2db",
                            fontSize: 11,
                        }}
                    >
                        {this.props.namaAsal}
                    </Text>
                    <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontSize: 11,
                            fontFamily: "RobotoRegular",
                            color: "#a2a2db",
                            textAlign: "right",
                        }}
                    >
                        {this.props.namaTujuan}
                    </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "RobotoRegular",
                            color: "#522289",
                            fontSize: 16,
                        }}
                    >
                        09:00 AM
                    </Text>
                    <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontFamily: "RobotoRegular",
                            color: "#522289",
                            paddingLeft: 70,
                            fontSize: 16,
                            textAlign: "right",
                        }}
                    >
                        21:00 PM
                    </Text>
                    </View>
                </View>

                <Text
                    style={{
                        fontFamily: "RobotoRegular",
                        color: "#a2a2db",
                        fontSize: 12,
                    }}
                >
                    {this.props.tgl}
                </Text>

                <Text
                    style={{
                        fontSize: 17,
                        marginRight: -5,
                        marginVertical: 8,
                        color: "#a2a2db",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    - - - - - - - - - - - - - - - - - - - - - - -
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: -8,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "RobotoRegular",
                            color: "#522289",
                            fontSize: 16,
                        }}
                    >
                        VIP
                    </Text>
                    <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontFamily: "RobotoBold",
                            color: "#4b3ca7",
                            paddingLeft: 150,
                            fontSize: 16,
                            textAlign: "right",
                        }}
                    >
                        $400
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
}