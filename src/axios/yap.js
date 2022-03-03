import * as yap from "yup"

const schema = yap.object().shape({
    email: yap.string().email().required(),
        password: yap.string().min(6).required()
});

export default schema;