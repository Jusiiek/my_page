import CHAT_APP_IMAGE from '@/images/chat_app_2.jpg';
import AI_CHAT_APP_1 from "@/images/ai_chat_app/ai_chat_1.jpg"
import AI_CHAT_APP_2 from "@/images/ai_chat_app/ai_chat_2.jpg"
import AI_CHAT_APP_3 from "@/images/ai_chat_app/ai_chat_3.jpg"


export interface ProjectInterface {
    id: string
    main_image: any,
    title: string,
    description: string,
    link: string,
    images: any[]
}


export const projectsList: ProjectInterface[] = [
    {
        id: "ai_chat_app",
        main_image: CHAT_APP_IMAGE,
        title: "projects.ai_chat_app_title",
        description: "projects.ai_chat_app_description",
        link: "https://github.com/Jusiiek/ai_chat",
        images: [
            AI_CHAT_APP_1,
            AI_CHAT_APP_2,
            AI_CHAT_APP_3
        ]
    }
]
