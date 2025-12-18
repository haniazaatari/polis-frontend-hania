export function usePolis() {
  const baseURL = 'http://localhost:5000';

  async function getConversation(id: string) {
    return await $fetch(`/api/v3/conversations/${id}`, { baseURL, credentials: 'include' });
  }

  async function getComments(conversationId: string) {
    return await $fetch(`/api/v3/comments?conversation_id=${conversationId}`, {
      baseURL,
      credentials: 'include'
    });
  }

  return { getConversation, getComments };
}
export function usePolis() {
  const baseURL = 'http://localhost:5000';

  async function getConversation(id: string) {
    return await $fetch(`/api/v3/conversations/${id}`, { baseURL, credentials: 'include' });
  }

  async function getComments(conversationId: string) {
    return await $fetch(`/api/v3/comments?conversation_id=${conversationId}`, {
      baseURL,
      credentials: 'include'
    });
  }

  return { getConversation, getComments };
}
