import { createUIMessageStream, createUIMessageStreamResponse } from 'ai'

const TEMPLATE_MESSAGE = `### Connect your own AI key to chat

This is a **demo template**, so the assistant is not wired up to a live model — the live version has been disabled to prevent usage on the template owner's account.

**To enable the chatbot:**

1. **Clone / fork this template** to your own Vercel project.
2. Add your **Vercel AI Gateway** key (\`AI_GATEWAY_API_KEY\`) in your project's environment variables.
3. Re-enable the model call in \`app/api/chat/route.ts\` — swap the static response back to \`streamText({ model, messages, ... })\`.

Once your key is connected, this assistant can answer questions about patients, appointments, medical records, and general veterinary topics using your clinic's data.`

export async function POST() {
  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      const id = 'template-notice'
      writer.write({ type: 'text-start', id })
      writer.write({ type: 'text-delta', id, delta: TEMPLATE_MESSAGE })
      writer.write({ type: 'text-end', id })
    },
  })

  return createUIMessageStreamResponse({ stream })
}
