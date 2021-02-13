const server = "staging"
const baseUrl = server === "staging" ? "http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1536" : null

export { baseUrl }