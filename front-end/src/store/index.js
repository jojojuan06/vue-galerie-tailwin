import { createStore } from 'vuex'
//importation de axios pour faire les requetes
import axios from '../axios';

export default createStore({
  state: {
    pictures:[],
    status: '', 
    message:'',
    pictureInfos: {
      id:'',
      name: '',
      path:'',
      tags:'',
    }, 
  },
  getters: {
  },
  mutations: {
    DISPLAY_PICTURES(state, pictures) {
      state.pictures = pictures;
    },
    SETSTATUS(state , data) {   
      state.status = data.status;
      state.message = data.message;
    },
    PICTURE_INFOS(state, picture) {
      state.pictureInfos = picture;
    },
    RESET_STATUS(state){
      state.status = '';
    },
    RESET_MESSAGE(state){
      state.message = '';
    },
  },
  actions: {
    getOnePicture: ({commit}, id) => { 
        axios.get(`/pictures/${id}`) //ajoute id a l'auth
        .then(function (response) { 
          //type et payload (recupere les info utilisateur)  
          commit('PICTURE_INFOS',response.data); 
        })
        .catch(error => { 
          console.log(error); 
          commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}`});
      });
    },
    getAllPictures:({commit}) => {
        axios.get('/pictures/')
        .then(function (response) {
          commit('DISPLAY_PICTURES', response.data);
        })
        .catch(error => { 
          commit('SETSTATUS' , {status:'error',message: error.response.error});
      });
    },
    deletePicture:({commit},{id}) => {
        //recupere le token
        axios.delete(`/pictures/${id}`)
        // attendre la reponse (comme fetch)
        .then(response => {
          commit('SETSTATUS' , {status:'success' , message: ('votre picture est bien supprimer')});   
        }) //retourne la repose des data dans l'objet vi
        .catch(error => { 
          commit('SETSTATUS' , {status:'error',message: error.response.error});
      });
    },
    updatePicture:({ commit, state},{id,updatedPicture}) => {
      let oldImg = state.pictures.find((picture) => picture.id == id);
      let changeImg = Object.assign({...oldImg},updatedPicture) 
      return axios.patch(`/pictures/${id}`, changeImg)
      .then(response => {
        // recupere et met a jour les infos de l'image de response.data
        state.pictureInfos = {...response.data}
        commit('SETSTATUS' , {status:'success' , message: 'votre picture as bien etait mise a jour'});    
      }) //retourne la reponse des data dans l'objet vi
      .catch(error => { 
        commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}`});
      });
    },  
    createPicture: ({commit}, {picture}) => {
      return new Promise((resolve, reject) => {
      //Pour invoquer   commit  mutation / Payload en 2e argument
      commit('SETSTATUS' , {status:'loading',message:''}); 
      //requete Post enregistrer l'utilisateur
      axios.post('/pictures/', picture) 
      .then(response => { 
        commit('SETSTATUS' , {status:'success' , message: 'votre picture as bien etait crée'}); 
      })
      .catch(error => {
        //message du back-end
        commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}` }); 
        //retourne une erreur
        reject(error); 
        });
      });
    },
  }
})
