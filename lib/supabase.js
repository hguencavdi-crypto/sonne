import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const db = {
  async loginBenutzer(username, password) {
    const { data, error } = await supabase
      .from('benutzer')
      .select('*')
      .eq('username', username)
      .eq('password_hash', password)
      .eq('aktiv', true)
      .single();
    return { data, error };
  },

  async getAlleTische() {
    const { data, error } = await supabase
      .from('tische')
      .select('*')
      .order('nummer');
    return { data, error };
  },

  async updateTischStatus(tischId, status) {
    const { data, error } = await supabase
      .from('tische')
      .update({ status })
      .eq('id', tischId)
      .select()
      .single();
    return { data, error };
  },

  async getMenuByKategorie() {
    const { data, error } = await supabase
      .from('kategorien')
      .select('*, menu_items(*)')
      .order('reihenfolge');
    return { data, error };
  },

  async createBestellung(tischId, kellnerId) {
    const { data, error } = await supabase
      .from('bestellungen')
      .insert([{ tisch_id: tischId, kellner_id: kellnerId }])
      .select()
      .single();
    return { data, error };
  },

  async addBestellungItem(bestellungId, menuItemId, menge, notizen) {
    const { data, error } = await supabase
      .from('bestellung_items')
      .insert([{
        bestellung_id: bestellungId,
        menu_item_id: menuItemId,
        menge,
        notizen
      }])
      .select()
      .single();
    return { data, error };
  },

  async updateBestellungStatus(bestellungId, status) {
    const { data, error } = await supabase
      .from('bestellungen')
      .update({ status })
      .eq('id', bestellungId)
      .select()
      .single();
    return { data, error };
  },

  subscribeTische(callback) {
    return supabase
      .channel('tische-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'tische' },
        callback
      )
      .subscribe();
  },

  subscribeBestellungen(callback) {
    return supabase
      .channel('bestellungen-changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'bestellungen' },
        callback
      )
      .subscribe();
  }
};
