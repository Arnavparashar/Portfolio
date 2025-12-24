// Basic contact endpoint: validate and relay via email provider (placeholder)
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const {name,email,message} = req.body || {};
  if(!name || !email || !message) return res.status(422).json({error:'Missing fields'});

  // TODO: wire up SendGrid or SMTP using env vars
  // For now just log and return success
  console.log('Contact form:', {name,email,message});
  return res.status(200).json({status:'ok'});
}
