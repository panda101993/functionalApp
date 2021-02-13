import React, { useState, useEffect } from 'react';
import { Platform, Dimensions, Linking, KeyboardAvoidingView } from 'react-native';
import { Container } from '../../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, AppbackgraoundImage, List } from '../../../../components/Atoms';
import styles from './style';
import { BORDER_GREY, LIGHT_GREEN, WHITE_ONE} from '../../../../global/Colors';
import { RF } from '../../../../global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../../../global/FontFamilies';
import { TextInput } from 'react-native-gesture-handler';
import { ShortButton } from '../../../../components/Molecules';
import { chatList } from '../../../../components/commomList';
import { attachment, chatSend_button, ChatBox, Customer_Profile } from '../../../../assets/Icon';


const { height, width } = Dimensions.get('window');

export default Chatscreen = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state).reducer
    const {
        send,
        Typing

    } = state.language.MESSAGES
    const [inbuilstate, setState] = useState({
        message:""

    })
    const [isrefresh, setrefresh] = useState(false);
    const messageValidate=(text)=>{
       
            if (text != "") {
                setState({
                    ...inbuilstate, message: text
                })
            }
            else {
                setState({
                    ...inbuilstate, message: ""
                })
            }
    
        }
   
    const ChatDisplay = ({ item, index }) => {
        return (
           
                item.id==1?
            <AppView style={styles.userView}>

                <AppView style={{ backgroundColor: LIGHT_GREEN, padding: 10, }}>
                    <AppText style={[styles.defaultText,{color:WHITE_ONE}]} >
                        {item.Message}
                    </AppText>

                </AppView>
            </AppView>
            :
                <AppView style={styles.customerView}>

                <AppView style={{justifyContent: 'space-between',alignItems: 'center', backgroundColor: WHITE_ONE, padding: 10,flexDirection: 'row', }}>
                    <AppImage style={{height:35,width:35}}source={Customer_Profile}/>
                    <AppText style={[styles.defaultText,{ marginLeft: 10, maxWidth:width*0.7,}]}>
                        {item.Message}
                      
                    </AppText>

                </AppView>
            </AppView>
            
            
            
        )
    }
    return (
        <Container backOnly title={props.NAME} Containerlayout={[styles.containerLayout]} scrollable header={true} >
            <AppView style={{ height: height * 0.76 }}>
               
            <List
                showsVerticalScrollIndicator={false}
                data={chatList}
                renderItem={({ item, index }) => ChatDisplay({ item, index }
                )}
                keyExtractor={item => item.id}
                extraData={isrefresh}
            />
            </AppView>
            <AppView style={styles.TypingView}>
                <TextInput 
                // multiline={inbuilstate.message?true:false}
                    style={styles.TypeingInput}
                    placeholder={Typing}
                    placeholderTextColor={BORDER_GREY}
               
                    onChangeText={(text)=>messageValidate(text)}
                >
                </TextInput>
                <Touchable>
                    <AppImage source={attachment} />
                </Touchable>
                <Touchable  onPress={()=>console.log("ok")}>
                    <AppbackgraoundImage
                        resizeMode="contain"
                        style={styles.shortBtnLayout}
                        source={chatSend_button}
                    >
                        <AppText style={[styles.shortBtnTxt]}>{send}</AppText>
                    </AppbackgraoundImage>
                </Touchable>
            </AppView>
        </Container>
    )
}