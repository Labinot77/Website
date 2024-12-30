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
import { solveValidation } from "@/lib/validations"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "@/hooks/use-toast"


const page = () => {
  const form = useForm<z.infer<typeof solveValidation>>({
    resolver: zodResolver(solveValidation),
    defaultValues: {
      answer: "",
    }
  })

  useEffect(() => {
    toast({
      title: "Късмет сечи ♥",
      duration: 5000,
    })
  },[])

  const question = {}
  const AI = true
  const router = useRouter()
  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof solveValidation>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-40 w-full">
        <div>
        <h1 className="bg-neutral-300 w-fit p-1 rounded-lg">Върпос</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla dicta autem tempore cupiditate voluptate ab quasi atque tempora, sint ut, obcaecati eaque deserunt ipsum, corporis mollitia accusamus? Doloremque, harum!</p>
        </div>


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
        {AI && "AI"}
        <div className="flex gap-4">
        <Button type="submit">Провери</Button>
        <Button type="button" onClick={() => router.refresh()}>Друг върпос</Button>
        </div>
      </form>
    </Form>
  )
}

export default page
