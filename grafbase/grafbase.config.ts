// g is a schema generator, config the final object to return
import { g,auth, config } from '@grafbase/sdk'
import {list} from "postcss";

// types are generated with the `type` method,
// followed by the name and fields.
const profile = g.type('Profile', {
    address: g.string()
})

// models can be generated with the `model` method
const user = g.model('User', {
    name: g.string().length({min:2,max:20}),
    email:g.string().unique(),
    avatarUrl:g.url(),
    description:g.string().optional(),
    githubUrl:g.url().optional(),
    linkedInUrl:g.url().optional(),
    projects:g.relation(()=>Project).list().optional(),
})
const Project=g.model('Project',{
    title:g.string().length({min:3}),
    description:g.string(),
    image:g.url(),
    liveSiteUrl:g.url(),
    githubUrl:g.url(),
    category:g.string().search(),
    createdBy:g.relation(()=>user)

})
// finally we export the default config
export default config({
    schema: g
})