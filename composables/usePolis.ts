export function usePolis() {
  const baseURL = 'http://localhost:5000';

  async function getConversation(id: string) {
    return await $fetch(`/api/v3/conversations/${id}`, { baseURL });
  }

  async function getComments(conversationId: string) {
    return await $fetch(`/api/v3/comments?conversation_id=${conversationId}`, { baseURL });
  }

  return { getConversation, getComments };
}
