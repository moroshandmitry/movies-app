import { Component, createRef } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { PostManagementContainer } from './containers/PostManagementContainer/PostManagementContainer';
import { PostManagement } from './components/PostManagement/PostManagement';
import { Text } from './components/Text/Text';
import { UserCard } from './components/UserCard/UserCard';
import { AppContext } from './context/AppContext';
import { Toaster } from './components/Toaster/Toaster';
import { Modal } from './components/Modal/Modal';
import { withLogger } from './hoc/withLogger';
import './App.scss';

// Mounting
// constructor
// getDerivedStateFromProps
// render
// UNSAFE_componentWillMount (old)
// componentDidMount

// Updating
// UNSAFE_componentWillReceiveProps (old)
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// UNSAFE_componentWillUpdate (old)
// componentDidUpdate

// Unmounting
// componentWillUnmount

// Error boundaries
// getDerivedStateFromError
// componentDidCatch

const TextWithLogger = withLogger(Text, logs =>
    console.log('<Text /> is rendered...', logs)
);

export class App extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         posts: DEFAULT_POSTS,
    //         postsAmount: 3,
    //         showPosts: true,
    //         login: '',
    //         showLogin: false
    //     };

    //     console.log('%c[constructor]', 'color: red; font-weight: bold;');
    // }

    inputRef = createRef();

    static getDerivedStateFromProps(props, state) {
        console.log(
            '%c[getDerivedStateFromProps]',
            'color: red; font-weight: bold;'
        );

        return null;
    }

    componentDidMount() {
        console.log('%c[componentDidMount]', 'color: red; font-weight: bold;');

        document.body.style.cssText = `
            overflow: hidden;
            padding-right: 17px;
        `;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(
    //         '%c[shouldComponentUpdate]',
    //         'color: green; font-weight: bold;'
    //     );
    //     // console.log('[nextProps]', nextProps);
    //     // console.log('[this.props]', this.props);
    //     // console.log('[nextState]', nextState);
    //     // console.log('[this.state]', this.state);

    //     // const areEqualAmounts = this.state.postsAmount === nextState.postsAmount;
    //     // const areEqualNames = this.props.name === nextProps.name;

    //     // if (areEqualAmounts && areEqualNames) return false;

    //     if (!nextState.postsAmount) return false;

    //     return true;
    // }

    getSnapshotBeforeUpdate(props, state) {
        console.log(
            '%c[getSnapshotBeforeUpdate]',
            'color: green; font-weight: bold;'
        );
        // console.log('[props]', props);
        // console.log('[state]', state);

        return 'This is a snapshot!';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(
            '%c[componentDidUpdate]',
            'color: green; font-weight: bold;'
        );
        // console.log('[prevProps]', prevProps);
        // console.log('[this.props]', this.props);
        // console.log('[prevState]', prevState);
        // console.log('[this.state]', this.state);
        // console.log('[snapshot]', snapshot);
    }

    handleFocusInput = () => {
        this.inputRef.current.focus();
    };

    // componentDidCatch(error, info) {
    //     console.log('[error]', error);
    //     console.log('[info]', info);
    // }

    render() {
        console.log('%c[render]', 'color: red; font-weight: bold;');

        return (
            <ErrorBoundary
                additionalPage={({ error, onSayHello }) => (
                    <div className="additional-page">
                        <h1>Something went wrong...</h1>
                        <p>{error.message}</p>

                        <button type="button" onClick={onSayHello}>
                            Go back
                        </button>
                    </div>
                )}
            >
                <Toaster>
                    <AppContext.Provider
                        value={{ url: '/', alt: 'image', rating: 33 }}
                    >
                        <div className="app">
                            <PostManagementContainer
                                as={PostManagement}
                                inputRef={this.inputRef}
                                onFocusInput={this.handleFocusInput}
                            />

                            <TextWithLogger>Hello World</TextWithLogger>
                            <UserCard />
                            <Modal />

                            {/* <UserCard
                                userInfoAs={
                                    <UserInfo
                                        avatarAs={<Avatar url="/" alt="image" />}
                                        rating={23}
                                    />
                                }
                            /> */}
                        </div>
                    </AppContext.Provider>
                </Toaster>
            </ErrorBoundary>
        );
    }
}
