import React, { useEffect, useState, Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Alert } from 'react-native'
import { Button } from '../../component'
import { URL_API } from '../../utils';
import { getNotes } from '../../redux/action/notes';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            isLoading: true
        }
    }

    async getNotesRedux() {
        await this.props.get(URL_API + '/getnotes')
            .then(() => {
                this.setState({
                    notes: this.props.dataNotes.notes,
                    isLoading: false
                })
                console.log('---', this.state);
            })
    }
    componentDidMount() {
        this.getNotesRedux();
    }

    HandleGoTo = (screen) => {
        this.props.navigation.navigate(screen);
    }

    showAlertDelete = (idItem) => {
        Alert.alert(
            'Konfirmasi',
            'Yakin Hapus Data ?',
            [
                {
                    text: 'Batal'
                },
                {
                    text: 'Hapus',
                    onPress: () => this.deleteNotes(idItem)
                },
            ],
        )
    }

    deleteNotes = (id) => {
        axios.get(URL_API + '/deletenotes/' + id)
        .then((response) => {
            Alert.alert(
                'Berhasil',
                'Data Berhasil Di Hapus',
                [
                    {
                        text:'OK'
                    }
                ]
            );
            this.getNotesRedux();
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    elementKiri = index => {
        return (
            <Text>{index}</Text>
        )
    }

    handleEdit = (id,data) => {
        this.props.navigation.navigate('Edit',{id:id,data:data});
    }

    elementKanan = (id,data) => {
        return (
            <View>
                <View>
                    <Text style={{color:'#f9a825'}} onPress={() => this.handleEdit(id,data)}>Edit</Text>
                </View>
                <View>
                    <Text style={{color:'#c62828'}} onPress={() => this.showAlertDelete(id) }>Hapus</Text>
                </View>
            </View>
        )
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <Button title="Tambah Data" onPress={() => this.HandleGoTo('Add')} />
                <View style={{ height: 30 }} />
                {
                    this.state.isLoading ? <Text>Sedang Mengambil Data</Text> : (
                        this.state.notes.map((item, i) => (
                            <ListItem
                                key={i}
                                leftElement={this.elementKiri(i + 1)}
                                rightElement={this.elementKanan(item.id,item)}
                                title={item.title}
                                subtitle={item.desc}
                                bottomDivider
                            />
                        ))

                    )
                }

            </ScrollView>
        )
    }
}

styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        dataNotes: state.ListNotes,
    }
}

const mapDispatchToProps = dispatch => ({
    get: url => dispatch(getNotes(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
