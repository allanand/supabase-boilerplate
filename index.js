
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://ijxddosmmvfqkuijlxdr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqeGRkb3NtbXZmcWt1aWpseGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NDQzNTksImV4cCI6MTk5MzAyMDM1OX0.tJPbWMwvU-GL-o47jbgsf0nS3lHLiTbzWgyiUuTAiSE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getbooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let booklist = document.getElementById('books');
  booklist.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`;
  }
  
}

getbooks();
