export const setScreenOptions = (route: Partial<any>,focused: boolean) => {
    let IconName = '';
    if (route.name === 'Home') {
        IconName = 'chatbox-sharp';
    } else if (route.name === 'My') {
        IconName = 'person';
    }
    return IconName;
};

export const setTabBarOptions = () => {
    return {
        activeTintColor: '#00c9a9',
        inactiveTintColor: '#9AB0C9'
    };
};
