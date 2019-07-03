import React, { Component } from 'react';
import './styles.css';
import PostItem from '../PostItem';

class PostList extends Component {
   state = {
      posts: [
         {
            id: 1,
            author: {
               name: 'Robson Henrique',
               avatar: 'https://purple.agency/media/2511/_0011_rowan.jpg'
            },
            date: '04 Jun 2019',
            content: 'Ao contrário da crença popular, Lipsum (Lorem Ipsum abreviado) não é simplesmente um texto qualquer?',
            comments: [
               {
                  id: 1,
                  author: {
                     name: 'Márcio Henrique',
                     avatar: 'https://purple.agency/media/2518/_0019_denzil.jpg'
                  },
                  content: "Ao contrário da crença popular, Lipsum (Lorem Ipsum abreviado) não é simplesmente um texto qualquer. Richard McClintock, professor de Latim na Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em Latim, consectetur, da passagem de Lipsum, e indo a fundo nas citações da literatura clássica descobriu de uma fonte segura que Lipsum vem das seções 1.10.32 e 1.10.33 do De Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal) escrito por Cícero em 45 A.C.."
               }
            ],
         },
         {
            id: 2,
            author: {
               name: 'Roberto Pereira',
               avatar: 'https://vigordamocidade.pt/images/planteis/junior/figo-pereira.jpg'
            },
            date: '04 Jun 2019',
            content: 'Ao contrário da crença popular, Lipsum não é simplesmente um texto qualquer?',
            comments: [
               {
                  id: 1,
                  author: {
                     name: 'Tereza Cristina',
                     avatar: 'https://purple.agency/media/2509/_0009_treina.jpg'
                  },
                  content: "Ao contrário da crença popular, Lipsum (Lorem Ipsum abreviado) não é simplesmente um texto qualquer. Richard McClintock, professor de Latim na Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em Latim, consectetur, da passagem de Lipsum, e indo a fundo nas citações da literatura clássica descobriu de uma fonte segura que Lipsum vem das seções 1.10.32 e 1.10.33 do De Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal) escrito por Cícero em 45 A.C.."
               },
               {
                  id: 2,
                  author: {
                     name: 'Márcio Henrique',
                     avatar: 'https://purple.agency/media/2518/_0019_denzil.jpg'
                  },
                  content: "Ao contrário da crença popular, Lipsum (Lorem Ipsum abreviado) não é simplesmente um texto qualquer. Richard McClintock, professor de Latim na Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em Latim, consectetur, da passagem de Lipsum, e indo a fundo nas citações da literatura clássica descobriu de uma fonte segura que Lipsum vem das seções 1.10.32 e 1.10.33 do De Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal) escrito por Cícero em 45 A.C.."
               }
            ],
         },
         {
            id: 3,
            author: {
               name: 'Robson Henrique',
               avatar: 'https://purple.agency/media/2511/_0011_rowan.jpg'
            },
            date: '04 Jun 2019',
            content: 'Ao contrário da crença popular, Lipsum (Lorem Ipsum abreviado) não é simplesmente um texto qualquer?',
            comments: [
               {
                  id: 1,
                  author: {
                     name: 'Tereza Cristina',
                     avatar: 'https://purple.agency/media/2509/_0009_treina.jpg'
                  },
                  content: "Ao contrário da crença popular, Lipsum (Lorem Ipsum abreviado) não é simplesmente um texto qualquer. Richard McClintock, professor de Latim na Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em Latim, consectetur, da passagem de Lipsum, e indo a fundo nas citações da literatura clássica descobriu de uma fonte segura que Lipsum vem das seções 1.10.32 e 1.10.33 do De Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal) escrito por Cícero em 45 A.C.."
               }
            ],
         },
      ]
   };

   render() {
      const { posts } = this.state;
      return (
         <div className="feed-container">
            <div className="feed-content">
               {posts.map(post => <PostItem key={post.id} data={post} />)}
            </div>
         </div>
      );
   }
}

export default PostList;