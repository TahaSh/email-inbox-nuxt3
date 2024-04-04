import { type EmailItem } from '~/types'

interface EmailResponse {
  id: string
  subject: string
  body: string
  sender: string
  recipient: string
}

export const useEmailStore = defineStore('emailStore', () => {
  const emails: Ref<Array<EmailItem>> = ref([])

  const inboxEmails = computed(() => {
    if (emails.value) {
      return emails.value.filter((email) => !email.archived)
    }
    return []
  })

  const archivedEmails = computed(() => {
    if (emails.value) {
      return emails.value.filter((email) => email.archived)
    }
    return []
  })

  const inboxCount = computed(() => {
    return inboxEmails.value.length
  })
  const archivedCount = computed(() => archivedEmails.value.length)

  async function fetch() {
    const { data: emailsResponse } = await useFetch<Array<EmailResponse>>(
      'https://659265b3bb129707198faf38.mockapi.io/api/v1/list/emails'
    )

    if (emailsResponse.value) {
      emails.value = emailsResponse.value.map((response, i) => ({
        id: response.id,
        title: response.subject,
        body: response.body,
        archived: false,
        read: false
      }))
    }
  }

  function getEmailById(id: string) {
    if (!emails.value) {
      return null
    }
    return emails.value.find((email) => email.id === id)
  }

  function markAsRead(ids: Array<string>) {
    emails.value
      .filter((email) => ids.includes(email.id))
      .forEach((email) => {
        email.read = true
      })
  }

  function updateArchived(ids: Array<string>, value: boolean) {
    emails.value
      .filter((email) => ids.includes(email.id))
      .forEach((email) => {
        email.archived = value
      })
  }

  return {
    emails,
    inboxEmails,
    archivedEmails,
    inboxCount,
    archivedCount,
    getEmailById,
    fetch,
    markAsRead,
    updateArchived
  }
})
