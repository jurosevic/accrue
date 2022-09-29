export function generateEmail(){
    const d = new Date();
    let text = d.toISOString();
    text = text.replaceAll(':', '').replaceAll('-', '');
    return `test${text.substring(0,15)}@mailinator.com`;
}