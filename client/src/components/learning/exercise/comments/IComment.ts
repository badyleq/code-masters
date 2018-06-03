export const COMMENTS_MOCK: IComment[] = [
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue",
        userName: "Kamil",
    },
    {
        content: "Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque",
        userName: "Stefan",
        subComment: [
            {
                content: "purus sapien ultricies dolor, et mollis pede metus eget nisi.",
                userName: "Zenek",
            },
        ]
    },
    {
        content: "purus sapien ultricies dolor, et mollis pede metus eget nisi.",
        userName: "Zenek",
    },
    {
        content: "nanana dupana !!!",
        userName: "Zosia",
    },
    {
        content: "interdum massa nibh nec erat",
        userName: "Kasia",
        subComment: [
            {
                content: "yes yes!!",
                userName: "Tomek",
            },
            {
                content: "nanana dupana !!!",
                userName: "Zosia",
                subComment: [
                    {
                        content: "purus sapien ultricies dolor, et mollis pede metus eget nisi.",
                        userName: "Zenek",
                    },
                    {
                        content: "nanana dupana !!!",
                        userName: "Zosia",
                    }
                ]
            },
            {
                content: "purus sapien ultricies dolor, et mollis pede metus eget nisi.",
                userName: "Zenek",
            },
        ]
    },
    {
        content: "nanana dupana !!!",
        userName: "Zosia",
    },

];

export default interface IComment {
    content: string,
    userName: string,
    subComment?: IComment[]
}