import Fastify from "fastify";
import { PrismaClient} from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.get('/', () => {
    const habits = prisma.habit.findMany({
        where: {
            
        }
    })
    return 'Hello World'
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running!')
})