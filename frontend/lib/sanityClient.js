import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: 'tsdzyww7',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
    useCoin: false,
    token: 'skaib7ZsMCqAObT0JhLe8w6oUEJrFTXVBcJfyT1cv7LwIINNetaKNLdAlAxciW2qnwqqhfCDtsrlpfpMkPNcmwp4uGtCj2g8bGoa8732uFq3lWD7k8HJJW4v1N0TYfTXIVqmOzJWk3KNEnJNygLazyI8KlKflwUVbBEItguQuBvNB1QNjwoF'
})