import type { Express } from 'express'
import axios from 'axios'

export const registerRoutes = (resourceName: string, port: number, app: Express) => {
  const resourceApi = axios.create({ baseURL: `http://localhost:${port}/${resourceName}` })
  app.get(`/${resourceName}`, async (req, res) => {
    try {
      const result = await resourceApi.get('/')
      return res.send(result.data)
    } catch (e) {
      return res.status(e.response.status).send(e.response.data)
    }
  })

  app.get(`/${resourceName}/:id`, async (req, res) => {
    try {
      const result = await resourceApi.get(`visualizar/${req.params.id}`)
      return res.send(result.data)
    } catch (e) {
      return res.status(e.response.status).send(e.response.data)
    }
  })

  app.post(`/${resourceName}`, async (req, res) => {
    const result = await resourceApi.post(`adicionar`, req.body)
    return res.send(result.data)
  })

  app.put(`/${resourceName}/:id`, async (req, res) => {
    const result = await resourceApi.post(`editar/${req.params.id}`, req.body)
    return res.send(result.data)
  })

  app.delete(`/${resourceName}/:id`, async (req, res) => {
    try {
      const result = await resourceApi.post('excluir', { id: req.params.id })
      return res.send(result.data)
    } catch (e) {
      return res.status(e.response.status).send(e.response.data)
    }
  })
}