/// <reference types="vite/client" />

interface Category {
    id: 1 | 2 | 3
    name: "MOBILE" | "WEB" | "BACKEND"
}

interface FaqAccordionItem {
    title: string
    content: string
}

interface TimelineEvent {
    title: string
    description: string
    date: string
}

interface TimelineEventProp extends TimelineEvent {
    id: number
}

interface RegisterPageProp {
    data: {
        categories: Category[]
    },
    fields: {
        email, phoneNumber, teamName, groupSize, projectTopic, category, privacyPolicyAccepted
    },
    handlers: {
        setEmail, setPhoneNumber, setTeamName, setGroupSize, setProjectTopic, setCategory, setPrivacyPolicyAccepted,
        submitForm
    }
}
