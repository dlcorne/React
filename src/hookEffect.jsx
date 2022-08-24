import {useEffect} from 'react';

const HookEffect = ({name}) => {
useEffect(() => {
    console.log(`useeffecting ${name} for malicious purposes`);
});

return (
<p> wassup {name} heard u been {name}ing real hard lately u on that billionaire grindset they gonna rename it the {name} grindset one day </p>
)};

export default HookEffect;