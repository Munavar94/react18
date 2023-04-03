import './App.css';
// import AnyName from './components/Greet';
// import { Greet } from './components/Greet';
// import { Message } from './components/Message';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { NameList } from './components/NameList';
// import { StyleSheet } from './styles/Stylesheet';
// import { Inline } from './styles/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css';

// import { Form } from './forms/Form';

// import { PostList } from './http/PostList';
// import { PostForm } from './http/PostForm';

import { useState, useTransition } from 'react';
import NAMES from './json_data/data.json';

function App() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    // setQuery(e.target.value);
    setInputValue(e.target.value);
    startTransition(() => setQuery(e.target.value))
  };

  const filteredNames = NAMES.filter((item) => {
    return item.first_name.toLocaleLowerCase().includes(query) || 
      item.last_name.toLocaleLowerCase().includes(query)
  });

  return (
    <>
    <div className="App">
      {/* <Greet name="Malik" heroName='SuperMan' />
      <Greet name="Munavar" heroName='BatMan'>
        <button>Action</button>
      </Greet>
      <Greet name={'Hyderabad'} heroName='Any'>
        <p>This is a children props</p>
      </Greet> */}

      {/* <Message name='Thank You'/> */}
      {/* <Message /> */}

      {/* <ClickHandler /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <StyleSheet /> */}

      {/* <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success - is From CSS Modules</h1> */}

      {/* <Form /> */}

      {/* <PostList /> */}

      {/* <PostForm /> */}
    </div>

    <div className="App">
      <input type='text' value={inputValue} onChange={changeHandler} />
        {
          isPending && <p>Updating the List...</p>
        }
        {
          filteredNames.map((item) => (
            <p key={item.id}>{item.first_name} {item.last_name}</p>
          ))
        }
    </div>
    </>
  );
};

export default App;