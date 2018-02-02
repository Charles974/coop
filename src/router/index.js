import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/Connexion.vue'
import MembreCreation from '@/components/MembreCreation.vue'
import ConversationListe from '@/components/ConversationListe.vue'
import ConversationCreation from '@/components/ConversationCreation.vue'
import ConversationElement from '@/components/ConversationElement.vue'
import ConversationContenu from '@/components/ConversationContenu.vue'
import MembreListe from '@/components/MembreListe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    },
    {
      path: '/conversations',
      name: 'listConv',
      component: ConversationListe
    },
    {
      path: '/conversation-creation',
      component: ConversationCreation
    },
    {
      path: '/conversation/:id/posts',
      name : 'conversation',
      component: ConversationContenu
    },
    {
      path: '/membre-liste',
      component: MembreListe
    }
  ]
})
