// Ato I - Inicializando o redux e o estado

// cria nossa Store

// const store = Redux.createStore(reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   // console.log(store);
  
  //Define estado da aplicação. INICIAL_STATE
  
  const INICIAL_STATE = {
    theme: 'light'
  }
  
  // adiciona redux devtools. window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  // console.log(Redux);
  
  
  
  // ato II - lidando com o estado
  
  // definir as mudanças do estado. Action
  
  const action = { type: 'CHANGE_THEME'}
  
  // Definir com oo estado será atualizado. reducer
  const reducer = (state = INICIAL_STATE, action) => {
    // console.log(state, action);
    if (action.type === 'CHANGE_THEME') {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    }
    return state;
  }

  const store = Redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

// ato III - alterar e lendo o estado

const button = document.getElementById('light-switch');
// console.log(button); 
button.addEventListener('click', () => {
  // console.log('cliquei');
  store.dispatch(action)
})

// lendo o estado. getState / subscribe

store.subscribe(() => {
  // console.log('mudei estado');
  const state = store.getState();

  const wrapperEl = document.getElementById('wrapper');
  wrapperEl.className = state.theme;
}) 