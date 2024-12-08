"use client";

import { useState } from 'react';
import { searchTracks } from './api/spotify_auth';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [genre, setGenre] = useState('');
  const [tempo, setTempo] = useState('');
  const [valence, setValence] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [speechiness, setSpeechiness] = useState(0);
  const [acousticness, setAcousticness] = useState(0);
  const router = useRouter();
  const [recommendations, setRecommendations] = useState([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setErrorMessage("");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Pattern = /^https:\/\/open\.spotify\.com(.*)\/track\/[a-zA-Z0-9?=&]+/;

    if (!Pattern.test(inputValue)) {
      setErrorMessage("Invalid Spotify track URL");
      return;
    }

    const trackIdRegex = /\/track\/([a-zA-Z0-9]{22})/;

    const match = inputValue.match(trackIdRegex);
    if (match) {
      const trackId = match[1];
      console.log("トラックID:", trackId);
      router.push(`/spo/${trackId}`);
    } else {
      setErrorMessage("Invalid Spotify track URL");
      return;
    }
  };

  // Handle Search 検索する
  const handleSearch = async () => {
    let query = '';

    if (genre) query += `genre:${genre} `;
    if (tempo) query += `tempo:${tempo} `;
    if (valence) query += `valence:${valence} `;
    if (energy) query += `energy:${energy} `;
    if (speechiness) query += `speechiness:${speechiness} `;
    if (acousticness) query += `acousticness:${acousticness} `;

    // Track Search　
    const tracks = await searchTracks(query);
    console.log(tracks)
    setRecommendations(tracks);
  };

  return (
    <div className='px-1 sm:10 lg:px-32 mx-8 my-20 flex flex-col gap-6 font-semibold text-base text-gray-800'>
      <h1 className='text-gray-950 font-bold text-3xl underline-offset-8 decoration-white'>How are you feeling now？</h1> 
      
      {/* Genre Selection (Combobox) */}
      <div>
        <label>ジャンル:</label>
        <select className='px-3 rounded-full font-medium ' value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">選択してください</option>
          <option value="pop">ポップ</option>
          <option value="rock">ロック</option>
          <option value="jazz">ジャズ</option>
          <option value="hip-hop">ヒップホップ</option>
          <option value="classical">クラシック</option>
          <option value="electronic">エレクトロニック</option>
          {/* Add more genres as needed */}
        </select>
      </div>

      {/* Tempo (Radio range: 40 to 200) */}
      <div>
        <label>テンポ (BPM):</label>
        <input
          type="number"
          value={tempo}
          min="40"
          max="200"
          onChange={(e) => setTempo(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-5 lg:my-4'>
        <label className='text-gray-900 text-xl ' >今の気分を教えてください (Valence)</label>
        <div  className='flex flex-col gap-3 lg:flex-row lg:gap-3 '>
          {["ネガティブ", "少しネガティブ", "どちらでもない", "少しポジティブ", "ポジティブ"].map((label, index) => {
            const value = index * 0.25; // Corresponding value: 0, 0.25, 0.5, 0.75, 1
            return (
              <label key={label}>
                <input
                  type="radio"
                  name="valence"
                  value={value}
                  checked={valence === value}
                  onChange={() => setValence(value)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </div>

      <div className='flex flex-col gap-5 lg:my-4'>
        <label className='text-gray-900 text-xl'>曲の雰囲気は？(Energy)</label>
        <div className='flex flex-col gap-1 lg:flex-row lg:gap-3' >
          {["落ち着きたい", "少し落ち着きたい", "どちらでもない", "少し盛り上がりたい", "盛り上がりたい"].map((label, index) => {
            const value = index * 0.25;
            return (
              <label key={label}>
                <input
                  type="radio"
                  name="energy"
                  value={value}
                  checked={energy === value}
                  onChange={() => setEnergy(value)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </div>

      <div className='flex flex-col gap-5 lg:my-4'>
        <label className='text-gray-900 text-xl'>歌詞はいりますか？ (Speechiness)</label>
        <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
          {["歌詞はいらない", "ちょっとほしい", "どちらでもない", "あった方がいい", "絶対必要"].map((label, index) => {
            const value = index * 0.25;
            return (
              <label key={label}>
                <input
                  type="radio"
                  name="speechiness"
                  value={value}
                  checked={speechiness === value}
                  onChange={() => setSpeechiness(value)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </div>

      <div className='flex flex-col gap-5 lg:my-4'>
        <label className='text-gray-900 text-xl '>アコースティックな感じは好きですか？ (Acousticness)</label>
        <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
          {["全然すきじゃない", "そこまで好きじゃない", "どちらでもない", "ちょっと好き", "めっちゃ"].map((label, index) => {
            const value = index * 0.25;
            return (
              <label key={label} >
                <input
                  type="radio"
                  name="acousticness"
                  value={value}
                  checked={acousticness === value}
                  onChange={() => setAcousticness(value)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Search Button */}
      <button className='bg-zinc-900 w-fit px-3 rounded-xl text-slate-100' onClick={handleSearch}>Search</button>
      <form className="max-w-sm mt-8" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              placeholder="https://open.spotify.com/track/your-track-id"
              value={inputValue}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5"
          >
            Submit
          </button>
      </form>
      {/* Display Recommendations */}
      <div>
        <h2>レコメンドされた曲</h2>
        {recommendations.length > 0 ? (
          <ul>
            {recommendations.map((track) => (
              <li key={track.id}>
                <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                  {track.name} - {track.artists.map(artist => artist.name).join(', ')}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>条件に合った曲は見つかりませんでした。</p>
        )}
      </div>
    </div>
  );
};

export default Search;
