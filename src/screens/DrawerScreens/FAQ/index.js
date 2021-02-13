import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
import { Faqlist } from '../../../components/commomList';
import { Minus_icon, Plus_icon } from '../../../assets/Icon';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default FAQ = (props) => {


    const state = useSelector(state => state).reducer
    const {
        FAQs

    } = state.language.DRAWER
    const [inbuilstate, setState] = useState({
        comment: ""

    })
    const [selected, setSelected] = React.useState(new Map());
    const [isrefresh, setrefresh] = useState(false);

    Item = ({ id, title, selected, details, onSelect }) => {
        return (
            <AppView>
                <AppView style={styles.unselectedLayout}>
                    <AppView style={styles.title_Layout}>
                        <AppText style={styles.titletext_style2}>
                            {title}
                        </AppText>
                        <Touchable onPress={() => onSelect(id)}>
                            <AppImage style={{ right: 0 }} source={selected ? Minus_icon : Plus_icon} />
                        </Touchable>
                    </AppView>
                </AppView>
                {selected ?
                    <AppView style={styles.selectedLayout}>


                        <AppText style={[styles.defaultText,]}>
                            {details}
                        </AppText>
                    </AppView>
                    : null}
            </AppView>

        );
    }



    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        [selected],
    );


    return (
        <Container title={FAQs} backOnly Containerlayout={[styles.containerLayout]}  header={true} >

            <AppView style={{marginTop: 20,flex:1}}>
                <List
                    showsVerticalScrollIndicator={false}
                    data={Faqlist}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            title={item.title}
                            details={item.details}
                            selected={!!selected.get(item.id)}
                            onSelect={onSelect}
                        />
                    )}
                    keyExtractor={item => item.id}
                    extraData={isrefresh}

                />
            </AppView>

        </Container>
    )



}