import "../styles/Register.css";

import RegisterMobile from "../components/Register/RegisterMobile.tsx";
import RegisterDesktop from "../components/Register/RegisterDesktop.tsx";
import SuccessModal from "../components/Register/SuccessModal.tsx";

import {ChangeEvent, useCallback, useEffect, useState} from "react";
import cn from "classnames";
import getLinkedApi from "../api/getLinkedApi.tsx";

function Register() {
    const [modalVisible, setModalVisible] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [teamName, setTeamName] = useState('');
    const [groupSize, setGroupSize] = useState(1);
    const [projectTopic, setProjectTopic] = useState('');
    const [category, setCategory] = useState<Category['id']>(1);
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);

    const handlers = useCallback(() => {
        return {
            setEmail: ev(setEmail),
            setPhoneNumber: ev(setPhoneNumber),
            setTeamName: ev(setTeamName),
            setGroupSize: ev(setGroupSize),
            setProjectTopic: ev(setProjectTopic),
            setCategory: ev(setCategory),
            setPrivacyPolicyAccepted: (e: ChangeEvent<HTMLInputElement>) => setPrivacyPolicyAccepted(e.target.checked),
            submitForm
        };
    }, [setEmail, setPhoneNumber, setTeamName, setGroupSize, setProjectTopic, setCategory, setPrivacyPolicyAccepted, submitForm]);

    // Convert handler to something like e => setval(e.target.value)
    const ev = (fn: Function) => (e: ChangeEvent<HTMLInputElement>) => fn(e.target.value);

    async function fetchCategories() {
        const {data} = await getLinkedApi.get('/hackathon/categories-list');

        return data;
    }

    async function submitForm(event: Event) {
        event.preventDefault();

        const {data} = await getLinkedApi.post('/hackathon/registration', {
            email,
            phone_number: phoneNumber,
            team_name: teamName,
            group_size: groupSize,
            project_topic: projectTopic,
            category,
            privacy_policy_accepted: privacyPolicyAccepted,
        });

        console.log(data)
        setModalVisible(true);
    }

    return <header className={cn("register-header flex flex-col min-h-screen", {'h-screen overflow-hidden': modalVisible})}>
        <RegisterMobile
            data={{categories}}
            fields={{email, phoneNumber, teamName, groupSize, projectTopic, category, privacyPolicyAccepted}}
            handlers={handlers()}
        />
        <RegisterDesktop
            data={{categories}}
            fields={{email, phoneNumber, teamName, groupSize, projectTopic, category, privacyPolicyAccepted}}
            handlers={handlers()}
        />
        {modalVisible && <SuccessModal/>}
    </header>
}

export default Register;
