import { createApp } from 'vue';
import App from './App.vue';

import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

createApp(App)
  .component('active-element', ActiveElement)
  .component('knowledge-base', KnowledgeBase)
  .component('knowledge-element', KnowledgeElement)
  .component('knowledge-grid', KnowledgeGrid)
  .mount('#app');
