import axios from 'axios';
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TodoService{

    /**
     * Get list of todos
     * @returns {Promise<AxiosResponse<any>>}
     */

    static async list(limit=null){
        let call =  await axios.get(`${baseUrl}/todos`);
        let todos = limit != null ? call.data.slice(0, limit) : call.data;

        let users = await axios.get(`${baseUrl}/users`);
    
        
        return todos.map(todo => {
            todo.user = users.data.find(user => user.id === todo.userId);
            return todo;
        });


    }


    static async create(data){
        return await axios.post(`${baseUrl}/todos`, data);
    }

    static async update(id, data){
        return await axios.put(`${baseUrl}/todos/${id}`, data);
    }


    static async detail(id){
        return await axios.get(`${baseUrl}/todos/${id}`);
    }

    static async delete(id){
        return await axios.delete(`${baseUrl}/todos/${id}`);
    }
}