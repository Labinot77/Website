"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { uploadValidation } from "@/lib/validations"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"



const page = () => {
  const form = useForm<z.infer<typeof uploadValidation>>({
    resolver: zodResolver(uploadValidation),
    defaultValues: {
      question: "",
      answer: "",
    }
  })
  const router = useRouter()
  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof uploadValidation>) => {
    console.log(values);

    router.push("/");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-40 w-full">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Върпос</FormLabel>
              <FormControl>
                <Textarea className="resize-none" rows={5} placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отговор</FormLabel>
              <FormControl>
                <Textarea className="resize-none" rows={5} placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Запази</Button>
      </form>
    </Form>
  )
}

export default page
