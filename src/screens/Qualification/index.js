import React, { useState, useEffect,useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container } from '../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { logo, Slide_one } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, List } from '../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, GREY_ONE, BLACK_ONE, BLUE_DARK, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT } from '../../global/Colors';
// import {  } from '../../Assets/Icon';
// import { RF } from "@Global/Responsive";
import { RF } from "../../global/Responsive";
import { Actions } from 'react-native-router-flux';
import { SANS_PRO_REGULAR } from '../../global/FontFamilies';
import { Skip_button } from '../../assets/Icon';
import { MassageOption, BeautyOption, FitnessOption, LifestyleOption } from "../../components/commomList"
import { SubmitButton } from '../../components/Molecules';
import {StaticBottomSheet} from '@Component/CommonComponents/index'

// import { BUTTON_SHORT } from '../../components/Molecules';
const { height, width } = Dimensions.get('window');
export default Qualification = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state).reducer
    const {
        Complte_qualification,
        Are_your_qualified,
        qualifications,
        I_am_qualified,
        I_still_trainning,
        Massage_Question,
        Lifestyle_Question,
        Beauty_Question,
        Fitness_Question,
        Continue,
        Qualification,
    } = state.language.QUALIFICATION
    const {Bottom_Body_Txt} = state.language.COMMON_TXT
    let [Qualified, setQualified] = useState(false)
        
    const [inbuildstate, setState] = useState({
        Massagetick: false,
        Beautytick: false,
        Fitnesstick: false,
        Lifestyletick: false
    })
    const [isrefresh, setrefresh] = useState(false);
    const refBottomSheetStatic = useRef();
    const OpentypeQuestion = (type) => {
        switch (true) {
            case (type == "Massage"):
                setState({
                    ...inbuildstate,
                    Massagetick: !inbuildstate.Massagetick,
                })
                break;
            case (type == "Beauty&Hair"):
                setState({
                    ...inbuildstate,
                    Beautytick: !inbuildstate.Beautytick,
                })
                break;
            case (type == "Fitness"):
                setState({
                    ...inbuildstate,
                    Fitnesstick: !inbuildstate.Fitnesstick,
                })
                break;
            default:
                setState({
                    ...inbuildstate,
                    Lifestyletick: !inbuildstate.Lifestyletick,
                })
                break;
        }
    }
    const SelectOption = (type, item) => {
        switch (true) {
            case (type == "Massage"):
                item.status = !item.status
                setrefresh(!isrefresh)
                break;
            case (type == "Beauty&Hair"):
                item.status = !item.status
                setrefresh(!isrefresh)
                break;
            case (type == "Fitness"):
                item.status = !item.status
                setrefresh(!isrefresh)
                break;
            default:
                item.status = !item.status
                setrefresh(!isrefresh)
                break;
        }
    }
    const MassageTreatment = ({ item, index }) => {
        return (
            <AppView style={{ width: width * 0.31, padding: 5, }}>
                <Touchable onPress={() => SelectOption("Massage", item)}
                    style={[styles.OptiononeView, { backgroundColor: item.status ? LIGHT_GREEN : WHITE_ONE, width: width * 0.3 }]}>
                    <AppText style={{ textAlign: "center", color: item.status ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                        {item.title}
                    </AppText>
                </Touchable>
            </AppView>



        )
    }
    const BeautyTreatment = ({ item, index }) => {
        return (
            <AppView style={{ width: width * 0.46, padding: 5, }}>
                <Touchable onPress={() => SelectOption("Beauty&Hair", item)}
                    style={[styles.OptiononeView, { backgroundColor: item.status ? LIGHT_GREEN : WHITE_ONE, width: width * 0.45 }]}>
                    <AppText style={{ color: item.status ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                        {item.title}
                    </AppText>
                </Touchable>
            </AppView>
        )
    }

    const FitnessTreatment = ({ item, index }) => {
        return (
            <AppView style={{ width: width * 0.31, padding: 5, }}>
                <Touchable onPress={() => SelectOption("Fitness", item)}
                    style={[styles.OptiononeView, { backgroundColor: item.status ? LIGHT_GREEN : WHITE_ONE, width: width * 0.3 }]}>
                    <AppText style={{ textAlign: "center", color: item.status ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                        {item.title}
                    </AppText>
                </Touchable>
            </AppView>
        )
    }
    const LifestyleTreatment = ({ item, index }) => {
        return (
            <AppView style={{ width: width * 0.31, padding: 5, }}>
                <Touchable onPress={() => SelectOption("lifestyle", item)}
                    style={[styles.OptiononeView, { backgroundColor: item.status ? LIGHT_GREEN : WHITE_ONE, width: width * 0.3 }]}>
                    <AppText style={{ textAlign: "center", color: item.status ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                        {item.title}
                    </AppText>
                </Touchable>
            </AppView>
        )
    }
    return (
        <Container Containerlayout={[styles.containerLayout]} scrollable header={false} >
            <StaticBottomSheet adr ={refBottomSheetStatic}
        title={Qualification}
        body={Bottom_Body_Txt}
    pressCross={()=>refBottomSheetStatic.current.close()}
        />
            <AppView style={[styles.logoImgView]}>
                <AppImage source={logo} style={[styles.logoImg]} />
            </AppView>
            <AppView style={[styles.HeaderView, { marginTop: inbuildstate.Massagetick == true || inbuildstate.Beautytick == true || inbuildstate.Lifestyletick == true || inbuildstate.Fitnesstick == true ? 0 : width * 0.08, }]}>
                <AppText style={{ color: LIGHT_BROWN, fontSize: RF(18), fontWeight: "bold" }}>
                    {Complte_qualification}
                </AppText>
            </AppView>
            {
                Qualified ?
                    <AppView style={[styles.BodyView, { marginTop: inbuildstate.Massagetick == true || inbuildstate.Beautytick == true || inbuildstate.Lifestyletick == true || inbuildstate.Fitnesstick == true ? 15 : width * 0.25, }]}>
                        <AppView style={{ flexDirection: 'row', }}>
                            <AppText style={{ color: LIGHT_BROWN, fontSize: RF(16), fontWeight: "normal" }}>
                                {Are_your_qualified}
                            </AppText>
                      
                            <Touchable  onPress={() => refBottomSheetStatic.current.open()} >
                                <AppText
                                    style={{ color: BLUE_DARK, textDecorationLine: "underline", fontSize: RF(16), fontWeight: "normal" }}>
                                    {qualifications}
                                </AppText>
                            </Touchable>

                        </AppView>
                        <AppView style={{ marginTop: width * 0.15, }}>
                            <AppView style={[styles.OptionView, {
                                backgroundColor: LIGHT_GREEN,

                                width: width * 0.8,
                            }]}>
                                <AppText style={{ color: WHITE_ONE, fontSize: RF(13), fontWeight: "normal" }}>
                                    {I_am_qualified}
                                </AppText>
                            </AppView>
                            <AppView>
                                <AppView style={{ marginTop: width * 0.08, flexDirection: 'row', width: width * 0.8, justifyContent: 'space-between', alignSelf: 'center', }}>
                                    <Touchable onPress={
                                        () => OpentypeQuestion("Massage")} style={[styles.OptiononeView, { backgroundColor: inbuildstate.Massagetick ? LIGHT_GREEN : WHITE_ONE }]}>
                                        <AppText style={{ color: inbuildstate.Massagetick ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(15), fontWeight: "normal" }}>
                                            Massage
                   </AppText>
                                    </Touchable>
                                    <Touchable onPress={() => OpentypeQuestion("Beauty&Hair")} style={[styles.OptiononeView, { backgroundColor: inbuildstate.Beautytick ? LIGHT_GREEN : WHITE_ONE }]}>
                                        <AppText style={{ color: inbuildstate.Beautytick ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(15), fontWeight: "normal" }}>
                                            Beauty & Hair
                   </AppText>
                                    </Touchable>
                                </AppView>

                                <AppView style={{ marginTop: width * 0.05, flexDirection: 'row', width: width * 0.8, justifyContent: 'space-between', alignSelf: 'center', }}>
                                    <Touchable onPress={() => OpentypeQuestion("Fitness")} style={[styles.OptiononeView, { backgroundColor: inbuildstate.Fitnesstick ? LIGHT_GREEN : WHITE_ONE }]}>
                                        <AppText style={{ color: inbuildstate.Fitnesstick ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(15), fontWeight: "normal" }}>
                                            Fitness
                   </AppText>
                                    </Touchable>
                                    <Touchable onPress={() => OpentypeQuestion("lifestyle")} style={[styles.OptiononeView, { backgroundColor: inbuildstate.Lifestyletick ? LIGHT_GREEN : WHITE_ONE }]}>
                                        <AppText style={{ color: inbuildstate.Lifestyletick ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(15), fontWeight: "normal" }}>
                                            lifestyle
                   </AppText>
                                    </Touchable>
                                </AppView>
                            </AppView>

                        </AppView>
                        {inbuildstate.Massagetick ?
                            <AppView style={styles.listView} >
                                <AppText style={{ width: width * 0.92, textAlign: "left", fontSize: RF(16), fontWeight: "bold", color: LIGHT_BROWN, marginVertical: 10, }}>
                                    {Massage_Question}
                                </AppText>
                                <List
                                    showsVerticalScrollIndicator={false}
                                    data={MassageOption}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={(item, index) => MassageTreatment(item, index)}
                                    numColumns={3}
                                    extraData={isrefresh}
                                />
                            </AppView>
                            :
                            null
                        }
                        {inbuildstate.Beautytick ?
                            <AppView style={styles.listView} >
                                <AppText style={{ width: width * 0.92, textAlign: "left", fontSize: RF(16), fontWeight: "bold", color: LIGHT_BROWN, marginVertical: 10, }}>
                                    {Beauty_Question}
                                </AppText>
                                <List
                                    showsVerticalScrollIndicator={false}
                                    data={BeautyOption}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={(item, index) => BeautyTreatment(item, index)}
                                    numColumns={2}
                                    extraData={isrefresh}
                                />
                            </AppView>
                            :
                            null
                        }
                        {inbuildstate.Fitnesstick ?
                            <AppView style={styles.listView} >
                                <AppText style={{ width: width * 0.92, textAlign: "left", fontSize: RF(16), fontWeight: "bold", color: LIGHT_BROWN, marginVertical: 10, }}>
                                    {Fitness_Question}
                                </AppText>
                                <List
                                    showsVerticalScrollIndicator={false}
                                    data={FitnessOption}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={(item, index) => FitnessTreatment(item, index)}
                                    numColumns={3}
                                    extraData={isrefresh}
                                />
                            </AppView>
                            :
                            null
                        }
                        {inbuildstate.Lifestyletick ?
                            <AppView style={styles.listView} >
                                <AppText style={{ width: width * 0.92, textAlign: "left", fontSize: RF(16), fontWeight: "bold", color: LIGHT_BROWN, marginVertical: 10, }}>
                                    {Lifestyle_Question}
                                </AppText>
                                <List
                                    showsVerticalScrollIndicator={false}
                                    data={LifestyleOption}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={(item, index) => LifestyleTreatment(item, index)}
                                    numColumns={3}
                                    extraData={isrefresh}
                                />
                            </AppView>
                            :
                            null
                        }
                    </AppView>

                    :
                    <AppView style={[styles.BodyView, { marginTop: width * 0.25, }]}>
                        <AppView style={{ flexDirection: 'row', }}>
                            <AppText style={{ color: LIGHT_BROWN, fontSize: RF(16), fontWeight: "normal" }}>
                                {Are_your_qualified}
                            </AppText>
                            <Touchable onPress={() => refBottomSheetStatic.current.open()} >
                                <AppText
                                    style={{ color: BLUE_DARK, textDecorationLine: "underline", fontSize: RF(16), fontWeight: "normal" }}>
                                    {qualifications}
                                </AppText>
                            </Touchable>

                        </AppView>
                        <AppView style={{ marginTop: width * 0.15, }}>
                            <Touchable onPress={() => setQualified(true)} style={styles.OptionView}>
                                <AppText style={{ color: LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                                    {I_am_qualified}
                                </AppText>
                            </Touchable>
                            <Touchable style={[styles.OptionView, { marginTop: width * 0.07, }]}>
                                <AppText style={{ color: LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                                    {I_still_trainning}
                                </AppText>
                            </Touchable>
                        </AppView>

                    </AppView>
            }
            {Qualified ?
                <AppView style={{marginVertical:inbuildstate.Massagetick == true || inbuildstate.Beautytick == true || inbuildstate.Lifestyletick == true || inbuildstate.Fitnesstick == true ? 25:width*0.2,}}>
                    <SubmitButton
                        btnLayout={{
                            opacity: inbuildstate.Massagetick == true || inbuildstate.Beautytick == true || inbuildstate.Lifestyletick == true || inbuildstate.Fitnesstick == true ? null :
                                0.5
                        }}
                        disabled={inbuildstate.Massagetick == true || inbuildstate.Beautytick == true || inbuildstate.Lifestyletick == true || inbuildstate.Fitnesstick == true ? false : true}
                        name={Continue}
                        onPress={()=>Actions.PersonalDetails()}
                    />
                </AppView> :
                null
            }
      

        </Container>
    )
}

