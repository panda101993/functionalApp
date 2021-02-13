import React, { useState, useEffect, useRef,Fragment } from 'react';

import { Container } from '../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List } from '../../components/Atoms';
import { FlatList, Platform, TextInput, Dimensions } from "react-native"
import { StaticBottomSheet } from '@Component/CommonComponents/index'
import styles from './style';
import { GREY_TWO, LIGHT_GREEN, ERROR_RED, WHITE_ONE, LIGHT_BROWN, GREY_ONE, BORDER_GREY, BLACK_ONE } from '../../global/Colors';
import { RF, wp, hp } from '../../global/Responsive';
import { checked_box, unchecked_box, calendarSolid, back_arrow, mail_img } from "@Image/Icon"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';
import {  SubmitButton} from '@Component/Molecules';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Actions } from 'react-native-router-flux';

const testIDs = require('./testIDs');



export default RequestSent = (props) => {
    const [selected, setSelected] = useState('');
    const refBottomSheetStatic = useRef();
    const onDayPress = (day) => {
      setSelected(day.dateString);
    };

    const renderCalendarWithSelectableDate = () => {
        return (
          <Fragment>
            <Calendar
            theme={{calendarBackground:"rgb(235,235,235)"}}
              testID={testIDs.calendars.FIRST}
              current={'2020-10-05'}
              style={{marginVertical:hp(2),}}
              hideExtraDays
              onDayPress={onDayPress}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: LIGHT_GREEN,
                  selectedTextColor: 'white',
                },
              }}
            />
          </Fragment>
        );
      };
    
    return (
        <AppView style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <AppView style={{ width: wp(94), alignSelf: 'center' }}>

                <Touchable onPress={()=>Actions.pop()}>
                <AppImage source={back_arrow}
                        style={{ height: hp(2.5), width: wp(6), marginVertical: hp(1) }}
                        resizeMode="contain" />
                    </Touchable>
                   
                    <AppText style={{ fontFamily: ROBOTO_BOLD, fontSize: RF(18), marginVertical: hp(1) }}>
                        Request submitted successfully!
                    </AppText>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(14), marginVertical: hp(1) }}>
                        Your request to join Alafiame has been shared with team.Now this is the time to meet
                   </AppText>
                    <AppView style={{ width: wp(86), alignSelf: 'center' }}>
                        <AppText style={{ fontFamily: ROBOTO_BOLD, fontSize: RF(16) }}>
                            Book Appointment
                    </AppText>
                        <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(14), marginVertical: hp(1) }}>
                            Date
                    </AppText>
                        <AppView style={{
                            width: wp(86), height: hp(6),
                            borderWidth: 0.6, borderRadius: 8,
                            paddingHorizontal: wp(1),
                            borderColor: BORDER_GREY,
                            flexDirection: 'row',
                        }}>
                            <TextInput
                            style={{paddingLeft:10,color:BLACK_ONE}}
                                placeholderTextColor={BORDER_GREY}
                                placeholder={"dd/mm/yyyy"}
                                value={selected}
                            />
                            <AppImage source={calendarSolid}
                                style={{
                                    height: hp(2.5), width: wp(6), alignSelf: 'center',
                                    marginLeft: 'auto',
                                }}
                                resizeMode="contain" />
                        </AppView>
                        <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(14), marginVertical: hp(1) }}>
                            Time
                        </AppText>

                        <AppView style={{
                            flexDirection: 'row', width: wp(86),
                            justifyContent: 'space-between',
                        }}>
                            <AppView style={{
                                width: wp(40), height: hp(6),
                                borderWidth: 0.6, borderRadius: 8,
                                paddingHorizontal: wp(1),
                                borderColor: BORDER_GREY,
                                flexDirection: 'row',
                            }}>
                                <TextInput
                                  style={{paddingLeft:10,color:BLACK_ONE}}
                                    placeholderTextColor={BORDER_GREY}
                                    placeholder={"From"}
                                />
                            </AppView >
                            <AppView style={{
                                width: wp(40), height: hp(6),
                                borderWidth: 0.6, borderRadius: 8,
                                paddingHorizontal: wp(1),
                                borderColor: BORDER_GREY,
                                flexDirection: 'row',
                            }}>
                                <TextInput
                                  style={{paddingLeft:10,color:BLACK_ONE}}
                                    placeholderTextColor={BORDER_GREY}
                                    placeholder={"To"}
                                />
                            </AppView>
                        </AppView>
                    </AppView>


                    {renderCalendarWithSelectableDate()}


                    <AppText style={{ fontFamily: ROBOTO_BOLD, fontSize: RF(16),marginVertical:hp(1),marginTop:hp(2) }}>
                        Upload documents
                     </AppText>
                    <AppView style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(1), }}>
                        <AppText style={{
                            fontFamily: ROBOTO_REGULAR,
                            fontSize: RF(14), marginVertical: hp(0.5), flexDirection: 'row',
                        }}>
                            Certificate for qualification
                        </AppText>
                        <Touchable 
                        onPress={()=>{}}
                        style={{
                            width: wp(30),
                            height: hp(4),
                            borderRadius: 20,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6
                        }}>
                            <AppText style={{ alignSelf: 'center', fontFamily: ROBOTO_LIGHT }}>Upload File</AppText>
                        </Touchable>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(1), }}>
                        <AppText style={{
                            fontFamily: ROBOTO_REGULAR,
                            fontSize: RF(14), marginVertical: hp(0.5), flexDirection: 'row',
                        }}>
                            Address proof
                        </AppText>
                        <Touchable 
                         onPress={()=>{}}
                        style={{
                            width: wp(30),
                            height: hp(4),
                            borderRadius: 20,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6
                        }}>
                            <AppText style={{ alignSelf: 'center', fontFamily: ROBOTO_LIGHT }}>Upload File</AppText>
                        </Touchable>
                    </AppView>
                    <AppView style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(1), }}>
                        <AppText style={{
                            fontFamily: ROBOTO_REGULAR,
                            fontSize: RF(14), marginVertical: hp(0.5), flexDirection: 'row',
                        }}>
                            Official Id(Passport/Driving license)
                        </AppText>
                        <Touchable 
                         onPress={()=>{}}
                        style={{
                            width: wp(30),
                            height: hp(4),
                            borderRadius: 20,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6
                        }}>
                            <AppText style={{ alignSelf: 'center', fontFamily: ROBOTO_LIGHT }}>Upload File</AppText>
                        </Touchable>
                    </AppView>
                    <AppView style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(1), }}>
                        <AppText style={{
                            fontFamily: ROBOTO_REGULAR,
                            fontSize: RF(14), marginVertical: hp(0.5), flexDirection: 'row',
                        }}>
                            Insurance
                        </AppText>
                        <Touchable 
                         onPress={()=>{}}
                        style={{
                            width: wp(30),
                            height: hp(4),
                            borderRadius: 20,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6
                        }}>
                            <AppText style={{ alignSelf: 'center', fontFamily: ROBOTO_LIGHT }}>Upload File</AppText>
                        </Touchable>
                    </AppView>
                    <AppView style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(1), }}>
                        <AppText style={{
                            fontFamily: ROBOTO_REGULAR,
                            fontSize: RF(14), marginVertical: hp(0.5), flexDirection: 'row',
                        }}>
                            Hygiene training Certificate
                        </AppText>
                        <Touchable 
                         onPress={()=>{}}
                        style={{
                            width: wp(30),
                            height: hp(4),
                            borderRadius: 20,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6
                        }}>
                            <AppText style={{ alignSelf: 'center', fontFamily: ROBOTO_LIGHT }}>Upload File</AppText>
                        </Touchable>
                    </AppView>

                    <AppView style={{marginVertical: hp(2),}}>
                    <SubmitButton
                        btnLayout={{ width: '95%' }}
                        // btnTxt={{fontSize:RF(15)}}
                        nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
                        name={"Submit"}
                        // enableImgLeft
                        // enableImgRight
                        // source_one={mail_img}
                        // source_two={}
                        // onPress={() => Submit()}
                     onPress={() => 
                         refBottomSheetStatic.current.open()
                        }
                    />
                </AppView>
                </AppView>
            </KeyboardAwareScrollView>

            <StaticBottomSheet adr={refBottomSheetStatic}
                
                sheetHeightProp={hp(20)}
                title={""}
                bodyStyle={{ textAlign: "center", fontSize: RF(15), fontFamily: ROBOTO_REGULAR }}
                bodyContainer={{ width: wp(70), alignSelf: 'center', }}
                body={"Thanks for booking the meeting slot and sharing your document You will hear from Alfiame team soon."}
                pressCross={() => { refBottomSheetStatic.current.close(), Actions.Login() }}
            />
        </AppView>

    )
}






























